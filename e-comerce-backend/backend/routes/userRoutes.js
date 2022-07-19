const express = require('express')
const {
  signUpUser,
  signInUser,
  getUser,
  updateUser,
  createUser,
  createFirstUser
} = require('../controller/user.controller')
const {verifyUser, verifySuperAdmin} = require('../middleware/middleware')
const router = express.Router()

router.post('/signup', signUpUser)
router.post('/signin', signInUser)
router.get('/user', verifyUser, getUser)
router.put('/user', verifyUser, updateUser)
router.post('/user',verifySuperAdmin, createUser)
router.post('/firstuser', createFirstUser)


module.exports = router
