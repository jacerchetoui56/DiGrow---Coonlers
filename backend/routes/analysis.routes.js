const express=require('express');
const router=express.Router({mergeParams:true});
const analysisCtr=require('../controllers/analysis.controller')
router.route('/')
.get( analysisCtr.getAllAnalysis)
.post(analysisCtr.createAnalysis)
      .get(analysisCtr.getOneAnalysis)
      .delete(analysisCtr.deleteAnalysis)
      .patch(analysisCtr.updateAnalysis);

module.exports=router;