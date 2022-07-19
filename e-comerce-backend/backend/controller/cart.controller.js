const Cart = require('../models/Cart')

const getCartProducts = async (req, res) => {
  try {
    const carts = await Cart.find({userId: req.user._id}).populate('productId')
    console.log("cart get")
    return res.status(200).send({status: 'ok', carts})
  } catch (err) {
    console.log(err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

const addProductInCart = async (req, res) => {
  const {productId, count} = req.body
  try {
    const cart = await Cart.findOneAndUpdate(
      {productId},
      {productId, count, userId: req.user._id},
      {upsert: true},
    )
    console.log("cart add")
    return res.status(201).send({status: 'ok', cart})
  } catch (err) {
    console.log(err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}


const deleteProductInCart = async (req, res) => {
  const {productId} = req.body
  try {
    const cart = await Cart.findOneAndDelete({productId})
    console.log("cart delete")
    return res.status(200).send({status: 'ok', cart})
  } catch (err) {
    console.log(err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

const modifyProductInCart = async (req, res) => {
  const {productId, count} = req.body
  try {
    const cart = await Cart.findOneAndUpdate(
      {productId},
      {productId, count, userId: req.user._id},
      {upsert: true},
    )
    console.log("cart modify")
    return res.status(201).send({status: 'ok', cart})
  } catch (err) {
    console.log(err)
    return sendResponseError(500, `Error ${err}`, res)
  }
}

module.exports = {addProductInCart, deleteProductInCart, getCartProducts}
