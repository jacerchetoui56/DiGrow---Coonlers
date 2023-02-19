const mongoose = require('mongoose');
const suggestionSchema = new mongoose.Schema({

  keywords:[String],

  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;