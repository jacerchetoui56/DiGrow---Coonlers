const Suggestion=require('../models/suggestion.model');
const crudController=require('./crud.controller');
const getAllSuggestion=crudController.getAll(Suggestion);
const getOneSuggestion=crudController.getOne(Suggestion);
const createSuggestion=crudController.createOne(Suggestion);
const updateSuggestion=crudController.updateOne(Suggestion);
const deleteSuggestion=crudController.deleteOne(Suggestion);
module.exports={getAllSuggestion,getOneSuggestion,createSuggestion,updateSuggestion,updateSuggestion,deleteSuggestion};