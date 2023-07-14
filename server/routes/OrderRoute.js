const express = require('express');
const OrderModel = require('../models/OrderModel')
const { UpdateStatusOrder, UpdateStatusVoteProduct, CreateOrder } = require('../controllers/OrderController');
const { RequireSignIn } = require('../middlewares/MiddleWares');
const router = express.Router();

// Get all orders
router.get("/", async (req, res) => {
    try {
        const orders = await OrderModel.find();
        res.json(orders);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get 1 order
router.get("/:id", async (req, res) => {
    try {
        const orderID = req.params.id;
        const order = await OrderModel.findOne({ orderID: orderID });
        res.json(order);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Update status order
router.put("/update-status/:id", UpdateStatusOrder);

// Update status vode 1 product
router.put("/update-status-vote/:orderID", UpdateStatusVoteProduct)

// Tạo đơn hàng mới
router.post("/create", CreateOrder)

module.exports = router;