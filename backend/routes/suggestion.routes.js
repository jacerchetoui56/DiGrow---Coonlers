const express=require('express');
const router=express.Router({mergeParams:true});
const suggestionCtr=require('../controllers/suggestion.controller')
const authCtr=require('../controllers/auth.controller')
router.route('/')
.get( suggestionCtr.getAllSuggestion)
.post(suggestionCtr.createSuggestion)
router.route('/:id')
      .get(suggestionCtr.getOneSuggestion)
      .delete(suggestionCtr.deleteSuggestion)
      .patch(suggestionCtr.updateSuggestion);

module.exports=router;