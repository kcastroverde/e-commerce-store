const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({storeId: req.params.storeId,});
    if(products.length === 0){
     return res.status(404).json({message: "No products loaded"});
    }
    console.log("products get");
    return res.status(200).json(products);
 
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log("product get");
    return res.status(200).json(product);
  } catch (error) {
    //id don't exist
    if(error.name === "CastError"){
      return res.status(404).json({ message: "Product not found" });
    }
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      storeId: req.params.storeId,
      category: req.params.category,
    });
    console.log("products get");
    return res.status(200).json(products);
  } catch (error) {
    //if category don't exist
    if(error.name === "CastError"){
      return res.status(404).json({ message: "Category not found" });
    }
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

const createProduct = async (req, res) => {
  try {
    const storeId = req.user.storeId;
    console.log(req.body.categorieId);
    const product = await Product.create({
      storeId: storeId,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      countInStock: req.body.countInStock,
      imageUrl: req.body.imageUrl,
      categorieId: req.body.categorieId,
    });
    console.log("product create");
    return res.status(201).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

const updateProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log("product update");
    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

const deleteProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndDelete(req.params.id);
    console.log("product delete");
    return res.status(200).json("product deleted");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
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
