const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    get: value => value.toUpperCase()
  },
  decription: {
    type: String
  },
  tags: {
    type: [String]
  },
  isBookmarked: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Card', cardSchema);
