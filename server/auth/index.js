const router = require('express').Router();
const passport = require('passport');

require('../passport/google');

router.get('/google',
  passport.authenticate('google', { 
      scope: ['profile', 'email'] 
    })
  );

router.get('/google/callback', 
  passport.authenticate('google', { 
      failureRedirect: '/login' 
    }), (req, res) => {
    res.redirect('/');
  });

module.exports = router;