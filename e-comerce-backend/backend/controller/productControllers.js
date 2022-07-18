const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({storeId: req.params.storeId,});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      storeId: req.params.storeId,
      category: req.params.category,
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body, { new: true });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

const updateProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

const deleteProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct,
};
