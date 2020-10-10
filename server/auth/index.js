const router = require('express').Router();
const passport = require('passport');
require('../passport/google');
const { create , setAdminIfNotExists} = require('./utils');

router.get('/isAdmin', async (req, res) => {
  if(req.user){
    if( req.user.role_id === '5f7c93fd189c9a186c9ed6d9' ){
      return res.json({
        isAdmin: true
      })
    }} 
  res.json({ isAdmin: false})
});

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