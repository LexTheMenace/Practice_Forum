const router = require('express').Router();
const passport = require('passport');
const { create } = require('./utils');

require('../passport/google');

router.get('/google',
  passport.authenticate('google', { 
      scope: ['profile', 'email'] 
    })
  );

router.get('/google/callback', ( req, res, next ) => {
   passport.authenticate('google', async (err, user) => {
    if (err) { return next(err); }

    try {
      const token = await create(user);
      // HIDE TOKEN IN FUTURE/ BEFORE DEPLOYMENT
      res.redirect(`${process.env.CLIENT_REDIRECT+token}`)

    } catch (err) {
      res.redirect(`${process.env.CLIENT_REDIRECT}${process.env.CLIENT_ERR_REDIRECT}`);
      
      next(err);
    }
    
  })(req, res, next);
});

module.exports = router;