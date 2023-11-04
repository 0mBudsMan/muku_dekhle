const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;


const GOOGLE_CLIENT_ID = "294740651474-cb4i2jlmcr9e28fojpk6d3dfk18qgj6t.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
 function(accessToken, refreshToken, profile, done) {
  /*User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });*/
  console.log(profile);
  done(null, profile);
}
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});