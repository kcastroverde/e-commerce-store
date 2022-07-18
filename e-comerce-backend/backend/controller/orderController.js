const Order = require("../models/Order");

const getOrders = async (req, res) => {
    try{
        const orders = await Order.find({userId: req.params.userId});
        res.json(orders);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getOrderById = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        res.json(order);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getOrdersByStore = async (req, res) => {
    try{
        const orders = await Order.find({storeId: req.params.storeId});
        res.json(orders);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getOrdersByStoreAndUser = async (req, res) => {
    try{
        const orders = await Order.find({storeId: req.params.storeId, userId: req.params.userId});
        res.json(orders);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const createOrderByUser = async (req, res) => {
   
    try{
        const order = await Order.create(req.body, {new: true});
        res.json(order);
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const updateOrder = async (req, res) => {
    const userId = req.params.userId;
    try{

        if(userId === order.userId){
            const order = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(order);
        }
        else{
            res.status(401).json({message: "Unauthorized"});
        }
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const deleteOrder = async (req, res) => {
    const userId = req.params.userId;
    try{

        if(userId === order.userId){
            const order = await Order.findByIdAndDelete(req.params.id);
            res.json(order);
        }
        else{
            res.status(401).json({message: "Unauthorized"});
        }
    }catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getOrders, getOrderById, getOrdersByStore, getOrdersByStoreAndUser, createOrderByUser, updateOrder, deleteOrder};