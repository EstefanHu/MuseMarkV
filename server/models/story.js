const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});



const storySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: startSchema,
    required: true
  }
});

module.exports = mongoose.model('Story', storySchema);