const express = require('express');
const FeedbackModel = require('../models/FeedbackModel');
const router = express.Router();

// Get all feedbacks
router.get("/", async (req, res) => {
    try {
        const feedbacks = await FeedbackModel.find();
        res.json(feedbacks);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create 1 product
router.post("/create")

module.exports = router;