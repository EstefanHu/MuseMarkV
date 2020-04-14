'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require('dotenv').config()

const DB_CONNECTION = 'musedb';
mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

mongoose.connection.once('open', () => {
    console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
    console.log('Connection Error: ' + err);
});

app.get('/stories/:id', (req, res) => {
  try {
    res.json([
      {
        "id": 1,
        "title": "Hello World"
      },
      {
        "id": 2,
        "title": "A Brave New World"
      }
    ]);
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
})

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const storyRouter = require ('./routes/story');
app.use('/story', storyRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});