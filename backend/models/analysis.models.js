const mongoose = require('mongoose');
const analysisSchema = new mongoose.Schema({
  platform:String,
  likenessPorcentage:Number,
  coherencePorcentage:Number,
  //pourcentage of coherenece or comptability between the potentiol post and the potentiel followers 
  //calculated using ai
  possibleSuccessPourcentage:Number,
  //calculated using api
  content:{
    type:mongoose.Schema.ObjectId,
    ref:'Content',
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const analysis = mongoose.model('Analysis', analysisSchema);

module.exports = analysis;