'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride('_method'));

require('dotenv').config()

const DB_CONNECTION = 'musedb';
mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`,
                  { useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true,
                    useFindAndModify: false });

mongoose.connection.once('open', () => {
    console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
    console.log('Connection Error: ' + err);
});

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.get('/api', (_, res) => {
    try {
        res.json(process.env.MAPBOX_ACCESS_TOKEN);
    } catch(error) {
        res.type('text').status(500).send('Error: ' + error);
    }
});

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const storyRouter = require ('./routes/story');
app.use('/story', storyRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});