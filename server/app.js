'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require('dotenv').config()

app.get('/api', (req, res) => {
  try {
    res.json(process.env.MAPBOX_ACCESS_TOKEN);
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

app.post('/register', (rqe, res) => {
  try {
    res.json('Noice');
  } catch(error) {
    res.type('text').status(500).send('Error: ' + error);
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});