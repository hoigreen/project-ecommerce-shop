const express = require('express');
const CommentModel = require('../models/CommentModel');
const router = express.Router();

// Get all comments
router.get("/", async (req, res) => {
    try {
        const comments = await CommentModel.find();
        res.json(comments);
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

// Create 1 comment
router.post("/create", async (req, res) => {
    try {
        const {
            nameProductVoted,
            owner,
            ownerAvatar,
            ownerName,
            time,
            content,
            starVoted
        } = req.body;

        const order = await new CommentModel({
            nameProductVoted,
            owner,
            ownerAvatar,
            ownerName,
            time,
            content,
            starVoted
        }).save();

        res.status(201).send({
            success: true,
            message: "Tạo comment thành công",
            order,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi khi tạo đnáh giá",
            error,
        });
    }
})

module.exports = router;