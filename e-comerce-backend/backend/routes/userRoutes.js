const express = require('express')
const {
  signUpUser,
  signInUser,
  getUser,
  updateUser,
  createUser,
  createFirstUser,
  getUsersByStore
} = require('../controller/user.controller')
const {verifyUser, verifySuperAdmin, verifyAdmin} = require('../middleware/middleware')
const router = express.Router()

router.post('/signup', signUpUser)
router.post('/signin', signInUser)
router.get('/user', verifyUser, getUser)
router.put('/user', verifyAdmin, updateUser)
router.post('/user',verifyAdmin, createUser)
router.post('/firstuser', createFirstUser)
router.get('/users', verifyAdmin, getUsersByStore)


module.exports = router
