const mongoose = require('mongoose');
const contentSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: [true, 'A content  must have a subject!']
  },
  discription: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Content = mongoose.model('Booking', contentSchema);

module.exports = Content;