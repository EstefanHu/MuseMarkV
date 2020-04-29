const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  story: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Story'
    }
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;