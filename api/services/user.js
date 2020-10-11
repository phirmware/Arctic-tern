const { User } = require('../models/db')
const JwtService = require('./jwt')
const PassportService = require('./passport')

module.exports = {
  findUsers,
  findWithQuery,
  findById,
  findOne,
  createUser,
  generateToken,
  authenticateUser: authenticateUser()
}

async function findUsers() {
  const users = await User.find()
  return users
}

async function findWithQuery(query = {}) {
  const users = await User.find(query)
  return users
}

async function findById(id) {
  const user = await User.findById(id)
  return user
}

async function findOne(query = {}) {
  const user = await User.findOne(query)
  return user
}

async function createUser(user) {
  const { email, password } = user
  const newUser = new User({ email })
  const { id, dateCreated } = await User.register(newUser, password)
  return { id, email, dateCreated }
}

function generateToken(user) {
  const token = JwtService.generateToken(user)
  return token
}

function authenticateUser() {
  return PassportService.authenticateLocal
}

