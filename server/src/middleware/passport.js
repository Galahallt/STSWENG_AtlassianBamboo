// initialize passport
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
import dotenv from 'dotenv-safe';

// get env values
dotenv.config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

/* process.env.GOOGLE_CALLBACK_URL
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/login/callback',
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
