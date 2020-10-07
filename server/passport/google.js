var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const users = require('../controllers/userController');

/*  passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((id, done) => {
  done(null, id);
});  */

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, async (accessToken, refreshToken, profile, cb) => {
    const email = profile.emails[0].value;
    
    const googleUser = {
      display_name: profile.displayName,
      email,
      google_id: profile.id,
      image_url: profile.photos[0].value
    };
    

    var user = await users.findByEmail(email)

     if (user ) {
      if (user.role_id) googleUser.role_id = user.role_id;
 
      user = await users.update(user._id, googleUser)
    } else {
      console.log('no user... creating');
      user = await users.insert(googleUser)
    }
 
    return cb(null, user)
    /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       }); */
  }
));