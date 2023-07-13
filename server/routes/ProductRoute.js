const express = require('express');
const ProductModel = require('../models/ProductModel');
const { CreateProductController, UpdateProductController, UpdateImageLink, UpdateImageBanner, UpdateImageList, DeleteProduct } = require('../controllers/ProductController');
const router = express.Router();

// Get All Product
router.get("/", async (req, res) => {
    try {
        const admins = await ProductModel.find();
        res.json(admins);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get 1 product
router.get("/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const admin = await ProductModel.findById({ _id });
        res.json(admin);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get 1 product
router.get("/get-by-name/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const product = await ProductModel.findOne({ name });
        res.json(product);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create 1 product
router.post("/create", CreateProductController)

// Update product
router.put("/update=:id", UpdateProductController)
router.put("/update/image-link=:id", UpdateImageLink)
router.put("/update/image-banner=:id", UpdateImageBanner)
router.put("/update/image-list=:id", UpdateImageList)

// Delete 1 product
router.delete("/delete/:id", DeleteProduct);

module.exports = router;