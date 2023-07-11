const FeedbackModel = require("../models/FeedbackModel");

const SendFeedback = async (req, res) => {
    try {
        const { name, email, type, content } = req.body;

        const feedback = await new FeedbackModel({ name, email, type, content }).save();

        res.status(201).send({
            success: true,
            message: "Gửi yêu cầu thành công",
            feedback,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi một lỗi gì đ",
            error,
        });
    }
};

module.exports = {
    SendFeedback
};