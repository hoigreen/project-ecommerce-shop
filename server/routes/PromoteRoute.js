const express = require('express');
const PromoteModel = require('../models/PromoteModel');
const { CreatePromote, UpdatePromote, DeletePromote } = require('../controllers/PromoteController');
const router = express.Router();

// Get all promote
router.get("/", async (req, res) => {
    try {
        const promotes = await PromoteModel.find();
        res.json(promotes);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get 1 prote
router.get("/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const promote = await PromoteModel.findById({ _id });
        res.json(promote);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create 1 promote
router.post("/create", CreatePromote)

// // Update product
router.put("/update=:id", UpdatePromote)

// // Delete 1 product
router.delete("/delete/:id", DeletePromote);

module.exports = router;