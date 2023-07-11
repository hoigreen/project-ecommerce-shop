const express = require('express');
const OrderModel = require('../models/OrderModel')
const { UpdateStatusOrder } = require('../controllers/OrderController');
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

// // Create 1 product
// router.post("/create", CreateProductController)

// // Update product
// router.put("/update=:id", UpdateProductController)
// router.put("/update/image-link=:id", UpdateImageLink)
// router.put("/update/image-banner=:id", UpdateImageBanner)
// router.put("/update/image-list=:id", UpdateImageList)

// // Delete 1 product
// router.delete("/delete/:id", DeleteProduct);

module.exports = router;