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
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  }
}));

const cache = (req, res, next) => {
  const { id } = req.params;

  redisClient.get(id, (err, data) => {
    if (err) throw err;

    if (data !== null) {
      res.send('cached');
    } else {
      next();
    }
  })
}

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
  console.log(req.session);
  res.json({ "success": "hello0" });
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const storyRouter = require('./routes/story');
app.use('/story', storyRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});