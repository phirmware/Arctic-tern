const jwt = require('express-jwt')
const jsonwebtoken = require('jsonwebtoken')
const config = require('../../config/config')

module.exports = {
  generateToken,
  jwtCheck: jwtCheck()
}

function jwtCheck() {
  return jwt({ secret: config.JWT_KEY, algorithms: ["HS256"] })
}

function generateToken(user) {
  const token = jsonwebtoken.sign(user , config.JWT_KEY)
  return token
}