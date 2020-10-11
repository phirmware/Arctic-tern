const router = require('express').Router()
const db = require('./models/db')
const middleware = require('./middleware')
const api = require('./api')
const config = require('../config/config')

module.exports = router

// Connect to database
try {
  db.connectDB()
  console.log(config.NOTE)
} catch (error) {
  console.error('Could not connect to the database', error)
}

router.get(
  '/healthz',
  api.healthz
)

router.get(
  '/user/users',
  api.allUsers
)

router.post(
  '/user/new',
  middleware.checkEmail,
  middleware.checkPassword,
  middleware.checkErrors,
  api.newUser
)

router.post(
  '/user/login',
  middleware.checkEmail,
  middleware.checkErrors,
  middleware.authenticate,
  api.generateToken
)

router.get(
  '/user/details',
  middleware.checkJwt,
  api.userDetails
)
