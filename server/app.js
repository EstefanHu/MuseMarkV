'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const redis = require('redis');

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
  secret: process.env.REDIS_KEY || 'super-secret-sessions', //TODO: Update to process.env
  store: new RedisStore({
    host: 'localhost',
    port: 6379,
    client: redisClient,
    ttl: 260
  }),
  saveUninitialized: false,
  resave: false
}));

require('dotenv').config()

const DB_CONNECTION = 'musedb';
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

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const storyRouter = require('./routes/story');
app.use('/story', storyRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});