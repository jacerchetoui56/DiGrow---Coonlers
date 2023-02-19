const express = require("express");

const router = express.Router({mergeParams:true});
const analysisRouter=require('./analysis.routes');
router.use('/analysis',analysisRouter);
module.exports = router;
