const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true;
  },
  content: {
    trype: String,
    require
  }
})