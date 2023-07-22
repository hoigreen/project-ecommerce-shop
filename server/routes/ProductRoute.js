const express = require('express');
const ProductModel = require('../models/ProductModel');
const { CreateProductController, UpdateProductController, UpdateImageLink, UpdateImageBanner, UpdateImageList, DeleteProduct, VoteProduct } = require('../controllers/ProductController');
const { uploadImageProduct } = require('../middlewares/uploadToCloud');
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

// Upload ảnh chính sản phẩm
router.post('/upload-image', uploadImageProduct.single('image-primary'), (req, res) => {
    res.status(200).json({ error: 'Upload thành công', path: req.file.path });
});

// Upload ảnh banner sản phẩm
router.post('/upload-image-primary', uploadImageProduct.single('image-banner'), (req, res) => {
    res.status(200).json({ error: 'Upload thành công', path: req.file.path });
});

// Upload ảnh chi tiết sản phẩm
router.post('/upload-image-list', uploadImageProduct.single('image-list'), (req, res) => {
    res.status(200).json({ error: 'Upload thành công', path: req.file.path });
});

// Update product
router.put("/update=:id", UpdateProductController)
router.put("/update/image-link=:id", UpdateImageLink)
router.put("/update/image-banner=:id", UpdateImageBanner)
router.put("/update/image-list=:id", UpdateImageList)

// Vote Product
router.put("/update-vote/:id", VoteProduct)

// Delete 1 product
router.delete("/delete/:id", DeleteProduct);

module.exports = router;