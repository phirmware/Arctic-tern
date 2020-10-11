const passport = require('passport')
var Strategy = require('passport-local').Strategy
const { User } = require('../models/db')

module.exports = {
  authenticateLocal: authenticateLocal()
}

passport.use(User.createStrategy())

passport.use(
  new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    User.authenticate()
  ),
);

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

function authenticateLocal() {
  return passport.authenticate('local')
}
