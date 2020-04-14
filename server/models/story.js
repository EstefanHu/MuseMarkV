const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user').schema;

const nodeSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  },
  name: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
  }
});

const summarySchema = new Schema({
  type: {
    type: String,
    enum['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
})

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
    type: summarySchema,
    required: true
  },
  route: {
    type: [nodeSchema],
    required: true
  },
  author
});

module.exports = mongoose.model('Story', storySchema);