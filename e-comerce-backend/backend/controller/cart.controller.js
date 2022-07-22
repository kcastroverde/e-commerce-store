const { findById } = require('../models/Cart')
const Cart = require('../models/Cart')

const getCartProducts = async (req, res) => {
  try {
    const carts = await Cart.find({userId: req.user._id}).populate('productId')
    console.log("cart get")
    return res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    return res.status(500).send({status: 'error', err})
  }
}

const addProductInCart = async (req, res) => {
  try {
    const {productId, count} = req.body
    const cart = new Cart({
      userId: req.user._id,
      productId,
      count
    })
    await cart.save()
    const carts = await Cart.find({userId: req.user._id}).populate('productId')
    console.log("cart add")
    return res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    return res.status(500).send({status: 'error', err})
  }
}


const deleteProductInCart = async (req, res) => {
  try {
    const cart = await Cart.deleteOne({_id: req.params.id})
    const carts = await Cart.find({userId: req.user._id}).populate('productId')
    console.log("cart delete", cart)
    return res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    return res.status(500).send({status: 'error', err})
  }

}

const modifyProductInCart = async (req, res) => {
  const {productId, count} = req.body
  try {
    const cart = await Cart.updateOne({productId, count})
    console.log("cart modify")
    const carts = await Cart.find({userId: req.user._id}).populate('productId')
    return res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    return res.status(500).send({status: 'error', err})
  }
}

const clearCart = async (req, res) => {
  try {
    const cart = await Cart.deleteMany({userId: req.user.id})
    console.log("cart clear")
    return res.status(200).send({status: 'ok', cart})
  } catch (err) {
    console.log(err)
    return res.status(500).send({status: 'error', err})
  }
}

module.exports = {addProductInCart, deleteProductInCart, getCartProducts, modifyProductInCart, clearCart}
