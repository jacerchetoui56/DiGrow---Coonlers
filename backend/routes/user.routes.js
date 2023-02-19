const express = require("express");

const router = express.Router({mergeParams:true});
const contentRouter=require('./content.route');
router.use('/content',contentRouter);
module.exports = router;
