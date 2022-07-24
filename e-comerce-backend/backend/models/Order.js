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
            name:{
                type: String,
                required: true,
            },
            count:{
                type: String,
                required: true,
            },
            price:{
                type: Number,
                required: true,
            },
            productId:{
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

    },
    total:{
        type: Number,
        required: true
    },
    wallet:{
        type: String,

    },
    finalStatus:{
        type: String,
        value: ['pending', 'confirmed', 'cancelled'],
        required: true,
        default: 'pending',
    },
    orderNumber:{
        type: Number,
        required: true,
    },
    txHash:{
        type: String,
    },
    orderType:{
        type: String,
        value: ['entrega', 'custodia'],
    }
},
{
    timestamps: true
}
);

const Order = mongoose.model("order", orderSchema);
module.exports = Order;