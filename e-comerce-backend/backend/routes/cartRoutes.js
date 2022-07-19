const express = require('express')
const {
  addProductInCart,
  deleteProductInCart,
  getCartProducts,
} = require('../controller/cart.controller')
const {verifyUser} = require('../middleware/middleware')
const router = express.Router()

router.get('/', verifyUser, getCartProducts)
router.post('/add', verifyUser, addProductInCart)
router.post('/delete', verifyUser, deleteProductInCart)

module.exports = router
