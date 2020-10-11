const mongoose = require('mongoose')
const { Schema } = mongoose
const passportLocalMongoose = require('passport-local-mongoose')


const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minLength: 4,
    maxLength: 12
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  bvn: {
    type: Number,
    required: false
  }
})

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
  errorMessages: {
      UserExistsError: 'A user with the given email is already registered',
  }
})


module.exports = mongoose.model('User', UserSchema)