const express = require('express');
const GiftcodeModel = require('../models/GiftcodeModel')
const { RequireSignIn } = require('../middlewares/MiddleWares');

const router = express.Router();

// GET All Giftcode
router.get("/", async (req, res) => {
    try {
        const giftcodes = await GiftcodeModel.find();
        res.json(giftcodes);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});


module.exports = router;

