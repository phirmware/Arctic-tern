const { version } = require('../package.json')
const UserService = require('./services/user')

module.exports = {
  healthz,
  allUsers,
  newUser,
  generateToken,
  userDetails
}

function healthz(req, res, next) {
  res.json({ message: 'Works', version })
}

async function allUsers(req, res, next) {
  const users = await UserService.findUsers()
  res.json(users)
}

async function newUser(req, res, next) {
  try {
    const { body } = req
    const data = await UserService.createUser(body)
    res.json(data)
  } catch (error) {
    if (error.name === 'UserExistsError') error.status = 401
    next(error)
  }
}

async function generateToken(req, res, next) {
  const { email } = req.body
  const { id } = await UserService.findOne({ email })
  const token = UserService.generateToken({ email, id })
  res.json({ token })
}

async function userDetails(req, res, next) {
  try {
    const { id } = req.user
    const User = await UserService.findById(id)
    res.json(User)
  } catch (error) {
    next(error)
  }
}