const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turnSchema = newSchema({
  position: {
    type: Number,
    requrie: true,
  },
  longitude: {
    type: String,
    require: true,
    trim: true,
  },
  latitude: {
    type: String,
    require: true,
    trim: true,
  }
});

module.exports = mongoose.model('Turn', turnSchema);