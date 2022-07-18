const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        storeId:{
            type: mongoose.Types.ObjectId,
            ref: 'store',
            required: true,
        },
        name:{
            type: String,
            required: true
        },
        categoryId:{
            type: Number,
            required: true,
            autoIncrement: true
        }
    })

    const Category = mongoose.model("categorie", categorySchema);
    module.exports = Category;