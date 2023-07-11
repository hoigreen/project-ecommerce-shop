const express = require('express');
const FeedbackModel = require('../models/FeedbackModel');
const { SendFeedback } = require('../controllers/FeedbackControlller')
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

// Gửi 1 feedback
router.post("/send", SendFeedback);

module.exports = router;