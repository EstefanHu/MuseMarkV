const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pointSchema = new Schema({
  type: {
    type: String,
    enum['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const summarySchema = new Schema({
  
});

module.exports = mongoose.model('Summary', summarySchema);