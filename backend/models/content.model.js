const mongoose = require('mongoose');
const contentSchema = new mongoose.Schema({

  discription: String,
  analysis:{
     type:String
  },
  suggestion:{
        type:String
  },
  user:{
    type:mongoose.Schema.ObjectId,
    ref:'User',
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Content = mongoose.model('Content', contentSchema);

module.exports = Content;