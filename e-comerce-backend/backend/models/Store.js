const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            unique: true,
        },
        storeId:{
            type: Number,
            required: true,
            autoIncrement: true,
            unique: true,
        },
        discount:{
            type: Number,
            required: true,
            default: 0,
        }
    });

    const Store = mongoose.model("store", storeSchema);
    module.exports = Store;