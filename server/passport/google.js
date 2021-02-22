var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const users = require('../controllers/userController');

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
    image_url: profile.photos[0].value,
    role_id: 1
  };

  try {
    let user = await users.findByEmail(email)

    if (user) {
      googleUser.role_id = user.role_id;
      user = await users.update(user._id, googleUser);
    } else {
      const admins = await users.findAdmins();

      if (admins.length === 0) {
        googleUser.role_id = 3;
      }
      user = await users.insert(googleUser);
    }
    return cb(null, user);
  } catch (err) {
return cb(err)
  }
}
));