const order = require("../models/Order");

const getOrders = async (req, res) => {
    try{
        const orders = await order.find({userId: req.params.userId});
        console.log("order get")
        return res.json(orders);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const getOrderById = async (req, res) => {
    try{
        const order = await order.findById(req.params.id);
        console.log("order get")
        return res.json(order);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const getOrdersByStore = async (req, res) => {
    try{
        const orders = await order.find({storeId: req.params.storeId});
        console.log("order get")
        return res.json(orders);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const getOrdersByStoreAndUser = async (req, res) => {
    try{
        const orders = await order.find({storeId: req.params.storeId, userId: req.params.userId});
        console.log("order get")
        return res.json(orders);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const createOrderByUser = async (req, res) => {
   
    try{
        const order = await order.create(req.body, {new: true});
        console.log("order create");
        return res.json(order);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const updateOrder = async (req, res) => {
    const userId = req.params.userId;
    try{

        if(userId === order.userId){
            const order = await order.findByIdAndUpdate(req.params.id, req.body, {new: true});
            console.log("order update");
            return res.json(order);
        }
        else{
            return res.status(401).json({message: "Unauthorized"});
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const deleteOrder = async (req, res) => {
    const userId = req.params.userId;
    try{

        if(userId === order.userId){
            const order = await order.findByIdAndDelete(req.params.id);
            console.log("order delete");
            return res.json(order);
        }
        else{
            return res.status(401).json({message: "Unauthorized"});
        }
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

module.exports = {getOrders, getOrderById, getOrdersByStore, getOrdersByStoreAndUser, createOrderByUser, updateOrder, deleteOrder};