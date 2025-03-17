var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Add this line to use category routes
var categoryRouter = require('./category');
router.use('/categories', categoryRouter);


module.exports = router;
