const { body, validationResult } = require('express-validator')
const { STATUS_CODES } = require('http')

const PassportService = require('./services/passport')
const JwtService = require('./services/jwt')

module.exports = {
  checkEmail: checkEmail(),
  checkPassword: checkPassword(),
  checkErrors,
  handleError,
  authenticate: authenticate(),
  checkJwt: checkJwt(),
}

function checkEmail() {
  return [
    body('email')
    .isEmail()
    .normalizeEmail()
    .not().isEmpty()
    .trim()
  ]
}

function checkPassword() {
  return [
    body('password').isLength({ min: 4 })
  ]
}

function checkErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  return next()
}

function handleError (err, req, res, next) {
  if (res.headersSent) return next(err)

  const statusCode = err.status || err.statusCode || err.code || 500
  const errorMessage = STATUS_CODES[statusCode] || 'Internal Error'
  res.status(statusCode).json({ error: errorMessage })
}

function authenticate(req, res, next) {
  return PassportService.authenticateLocal
}

function checkJwt(req, res, next) {
  return JwtService.jwtCheck
}