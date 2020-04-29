'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()
const app = express();
const DB_CONNECTION = process.env.APP_DB || 'musedb';
const sessionStore = new RedisStore({
  host: 'localhost',
  port: 6379,
  client: redisClient,
  ttl: 260
});
const PORT = process.env.PORT || 4000;

mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
mongoose.connection.once('open', () => {
  console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
  console.log('Connection Error: ' + err);
});

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(session({
  secret: process.env.SESSIONS_KEY || 'super-secret-sessions',
  store: sessionStore,
  saveUninitialized: false,
  resave: false,
  name: 'museCookie',
  cookie: {
    maxAge: 60000,
    httpOnly: false,
    sameSite: false,
    secure: process.env.ENVIRONMENT === 'production'
  }
}));

app.get('/api', (_, res) => {
  try {
    res.json(process.env.MAPBOX_ACCESS_TOKEN);
  } catch (error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

app.get('/cookie', (req, res) => {
  if (req.session.viewCount) {
    req.session.viewCount = req.session.viewCount + 1;
  } else {
    req.session.viewCount = 1;
  }
  console.log(req.sessionID);
  res.json(req.session);
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const storyRouter = require('./routes/story');
app.use('/story', storyRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});