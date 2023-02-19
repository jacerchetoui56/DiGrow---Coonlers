const express=require('express');
const router=express.Router({mergeParams:true});
const contentCtr=require('../controllers/content.controller')
router.route('/')
.get(contentCtr.getAllContent)
.post(contentCtr.createContent)
router.route('/:id')
      .get(contentCtr.getOneContent)
      .delete(contentCtr.deleteContent)
      .patch(contentCtr.updateContent);

module.exports=router;
      