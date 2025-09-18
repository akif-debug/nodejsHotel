const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');

passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },
    async (username, password, done) => {
      try {
        const user = await Person.findOne({ username: username.trim() });
        if (!user) {
          return done(null, false, { message: 'Incorrect username' });
        }

        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
          return done(null, false, { message: 'Incorrect password' });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

module.exports = passport;
