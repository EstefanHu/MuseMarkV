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

const turnSchema = new Schema({
  type: {
    type: String,
    enum['Point'],
    required: true
  }
});

const storySchema = new Schema({
  
})