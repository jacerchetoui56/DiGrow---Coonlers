const content=require('../models/content.model');
const crudController=require('./crud.controller');
const getAllContent=crudController.getAll(content);
const getOneContent=crudController.getOne(content);
const createContent=crudController.createOne(content);
const updateContent=crudController.updateOne(content);
const deleteContent=crudController.deleteOne(content);
module.exports={getAllContent,getOneContent,createContent,updateContent,deleteContent};