const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
{
    storeId: {
        type: mongoose.Types.ObjectId,
        ref: "store",
        required: true,
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    },
    products:[
        {
            productId:{
                type: mongoose.Types.ObjectId,
                ref: 'product',
                required: true,
            },
            count:{
                type: String,
                required: true,
            }
        }
    ],
    payed:{
        type: Boolean,
        required: true,
        default: false,
    },
    tokenUsed:{
        type: String,
        required: true
    },
    totalInUsd:{
        type: Number,
        required: true
    },
    totalInToken:{
        type: Number,
        required: true
    },
    wallet:{
        type: String,
        required: true
    },
    delivered:{
        type: Boolean,
        required: true,
        default: false,
    }
});

const Order = mongoose.model("order", orderSchema);
module.exports = Order;