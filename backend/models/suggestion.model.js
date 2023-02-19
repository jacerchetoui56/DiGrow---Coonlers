const mongoose = require('mongoose');
const contentSchema = new mongoose.Schema({

  discription: String,
  analysis:{
     type:String
  },
  suggestion:{
        type:String
  },
  content:{
    type:mongoose.Schema.ObjectId,
    ref:'Content',
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Content = mongoose.model('Analysis', contentSchema);

module.exports = Content;