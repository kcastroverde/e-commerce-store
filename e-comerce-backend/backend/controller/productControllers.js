const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({storeId: req.params.storeId,}).populate("categorieId");
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
  try{
    const {name, price, description,countInStock,category, imageToCharge} = req.body.formData;
    const storeId = req.user.storeId;
    const cloudinaryUpload = await cloudinary.uploader.upload(imageToCharge, {
      folder: storeId,
      width: 500,
      crop: "scale"
    });
    const product = new Product({
      name,
      price,
      description,
      categorieId:category,
      imageUrl: {
        url: cloudinaryUpload.url,
        public_id: cloudinaryUpload.public_id
      },
      storeId,
      countInStock
    });
    await product.save();
    console.log("product create");
    const products = await Product.find({storeId: req.user.storeId}).populate("categorieId");
    return res.status(200).json(products);
  }catch(error){
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
}

const updateProduct = async (req, res) => {
  try{
    const {name, price, description,countInStock,category, imageUrl} = req.body.formData;
    const product = await Product.find({_id: req.params.id});
    if(imageUrl !== product.imageUrl.url){
      const cloudinaryUpload = await cloudinary.uploader.upload(imageUrl, {
        folder: product.storeId,
        width: 500,
        crop: "scale"
      });
      product.imageUrl.url = cloudinaryUpload.url;
      product.imageUrl.public_id = cloudinaryUpload.public_id;
    }
    const updatedProduct = await Product.updateOne({_id: req.params.id}, {
      name,
      price,
      description,
      categorieId:category,
      countInStock
    });

    console.log("product update");
    const products = await Product.find({storeId: req.user.storeId}).populate("categorieId");
    return res.status(200).json(products);
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
