const mongoose = require('mongoose')
const User = require('./user')
const app_config = require('../../config/config')

const DB_URL = app_config.DB_URL

module.exports = {
  User,
  connectDB
}

async function connectDB() {
  return mongoose.connect(
    DB_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )
}
