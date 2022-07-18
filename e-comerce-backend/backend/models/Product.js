const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  storeId: {
    type: mongoose.Types.ObjectId,
    ref: "store",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  categorieId: {
    type: mongoose.Types.ObjectId,
    ref: "categorie",
    required: true,
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
