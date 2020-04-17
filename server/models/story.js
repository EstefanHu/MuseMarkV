const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

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
  markdown: {
    type: String,
    trim: true,
  },
  sanitizedHtml: {
    type: String,
    requried: true
  }
});

const summarySchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
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
    // required: true
  },
  route: {
    type: [nodeSchema],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  authorId: {
    type: String,
    required: true
  }
});

storySchema.pre('validate', function(next) {
  for (let i = 0; i < this.route.length; i++) {
    if (this.route[i].markdown) {
      this.route[i].sanitizedHtml = dompurify.sanitize(marked(this.route[i].markdown));
    }
  }

  next();
});

// TODO: Test if subdocument validations work
// nodeSchema.pre('validate', function(next) {
//   if (this.markdown) {
//     this.sanitizedHtml = dompurify.sanitize(marked(this.markdown));
//   }

//   next();
// });

module.exports = mongoose.model('Story', storySchema);