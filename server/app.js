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

const dbString = 'mongodb://localhost:27017/tutorial_db';
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

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

const connection = mongoose.createConnection(dbString, dbOptions);

const mongoStore = require('connect-mongo')(session);
const mongoSession = new mongoStore({
  mongooseConnection: connection,
  collection: 'sessions'
})

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(session({
  secret: 'super-secret-sessions', //TODO: Update to process.env
  store: mongoSession,
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 60000,
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
  if (req.session.viewCount > 0) {
    req.session.viewCount = req.session.viewCount + 1;
    console.log("========= " +req.session.viewCount)
  } else {
    req.session.viewCount = 1;
    console.log("========= " + req.session.id)
  }
  console.log(req.session);
  res.send(`${req.session.viewCount}`);
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const storyRouter = require('./routes/story');
app.use('/story', storyRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});