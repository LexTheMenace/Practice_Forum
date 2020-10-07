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
    res.json({ token })

    } catch (err) {
      next(err);
    }
    
  })(req, res, next);
});

module.exports = router;