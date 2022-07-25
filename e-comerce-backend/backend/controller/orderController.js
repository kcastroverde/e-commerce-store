const Order = require("../models/Order");
const User = require("../models/User");

const getOrders = async (req, res) => {
    try{

        const orders = await Order.find({userId: req.user._id}).populate('products.productId');
        console.log("order get")
        return res.json(orders);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const getOrderById = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);
        console.log("order get")
        return res.json(order);
    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const getOrdersByStore = async (req, res) => {
    try{
        const storeId= req.user.storeId;
        const orders = await Order.find({storeId: storeId}).populate('products.productId');
        console.log("order get")
        return res.json(orders);
    }
    catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}



const createOrderByUser = async (req, res) => {
   
    try{
        const  {fullName, address, zipCode, city, country, state}= req.body
        const user = await User.findById(req.user)
        //orderLength by store
        const orders = await Order.find({storeId: req.user.storeId});
        const orderLength = orders.length;
     
        if(user.fullName === fullName&&
            user.address === address&&
            user.zipCode === zipCode&&
            user.city === city&&
            user.country === country&&
            user.state === state
            )
            {
                const order = await Order.create({
                    userId: user._id,
                    storeId: user.storeId,
                    products: req.body.products,
                    total: req.body.total,
                    orderNumber: orderLength+1,
                });
                console.log("order create");
                const orders = await Order.find({userId: req.user._id})
                return res.json({
                    orderSaved: true,
                    orders
                });
            }else{
                // update user 
                user.fullName = fullName;
                user.address = address;
                user.zipCode = zipCode;
                user.city = city;
                user.country = country;
                user.state = state;
                await user.save();
                console.log("user update");
                const order = await Order.create({
                    userId: user._id,
                    storeId: user.storeId,
                    products: req.body.products,
                    total: req.body.total,
                    orderNumber: orderLength+1,
            })
            console.log("order create");
            const orders = await Order.find({userId: req.user._id})
            return res.json({
                orderSaved: true,
                orders
            });
        }

    }catch(error){
        console.error(error);
        return res.status(500).json({message: "Server Error"});
    }
}

const updateOrder = async (req, res) => {
    const orderId = req.params.id;
    const userId = req.user._id
    const userRole = req.user.role
    console.log("body", req.body)
    try{
        if(userId === Order.userId||userRole === "admin"|| userRole === "superAdmin"){
            const order = await Order.updateOne({_id: orderId}, req.body);
            console.log("order update");
            const orders = await Order.find({userId: req.user._id})
            return res.json({
                orderSaved: true,
                orders
            });
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

module.exports = {getOrders, getOrderById, createOrderByUser, updateOrder, deleteOrder, getOrdersByStore};