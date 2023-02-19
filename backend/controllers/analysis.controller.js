const analysis=require('../models/analysis.models');
const crudController=require('./crud.controller');
const getAllAnalysis=crudController.getAll(analysis);
const getOneAnalysis=crudController.getOne(analysis);
const createAnalysis=crudController.createOne(analysis);
const updateAnalysis=crudController.updateOne(analysis);
const deleteAnalysis=crudController.deleteOne(analysis);
module.exports={getAllAnalysis,getOneAnalysis,createAnalysis,updateAnalysis,deleteAnalysis};