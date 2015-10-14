var express = require('express');
var router = express.Router();
var passport = require('passport');
var LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'LinkedIn OAuth2 Exercise',
    user: req.user
  });
});



module.exports = router;
