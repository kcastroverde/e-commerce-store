const mongoose = require('mongoose')
const { post } = require('../routes/productRoutes')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    fullName: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    postalCode: {
      type: String,
    }
  },
  {
    timestamps: true,
  }

)

const User = mongoose.model('user', userSchema)
module.exports = User
