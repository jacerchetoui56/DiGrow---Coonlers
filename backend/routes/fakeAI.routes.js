const express=require('express');
const router=express.Router({mergeParams:true});
const fakeCtr=require('../controllers/fakeAI.controller')
const authCtr=require('../controllers/auth.controller')
router.get('/fakeAnalysis',fakeCtr.fakeAnalysis);
router.get('/fakeSuggestion',fakeCtr.fakeSuggestion);

module.exports=router;
      