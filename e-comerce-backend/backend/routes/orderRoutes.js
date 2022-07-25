const express = require("express");
const router = express.Router();
const {
    getOrders,
    getOrderById,
    createOrderByUser,
    updateOrder,
    deleteOrder,
    getOrdersByStore
} = require("../controller/orderController");
const {verifyUser, verifyAdmin} = require('../middleware/middleware')
router.get("/",verifyAdmin, getOrders);
router.get("/admin",verifyAdmin, getOrdersByStore);
router.get("/:id",verifyUser, getOrderById);
router.post("/",verifyUser, createOrderByUser);
router.put("/:id",verifyUser, updateOrder);
router.delete("/:id",verifyUser, deleteOrder);

module.exports = router;