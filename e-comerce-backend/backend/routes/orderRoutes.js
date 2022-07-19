const express = require("express");
const router = express.Router();
const {
    getOrders,
    getOrderById,
    getOrdersByStore,
    getOrdersByStoreAndUser,
    createOrderByUser,
    updateOrder,
    deleteOrder
} = require("../controller/orderController");
const {verifyUser, verifyAdmin} = require('../middleware/middleware')

router.get("/",verifyAdmin, getOrders);
router.get("/:id",verifyUser, getOrderById);
router.get("/store/:id",verifyUser, getOrdersByStore);
router.get("/store/:id/user/:user",verifyUser, getOrdersByStoreAndUser);
router.post("/",verifyUser, createOrderByUser);
router.put("/:id",verifyUser, updateOrder);
router.delete("/:id",verifyUser, deleteOrder);

module.exports = router;