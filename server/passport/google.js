var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  }, (accessToken, refreshToken, profile, cb) => {
    console.log(profile) 
    return cb(new Error('Working on app'))
    /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
         return done(err, user);
       }); */
  }
));