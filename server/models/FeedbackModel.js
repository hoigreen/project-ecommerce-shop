const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "",
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        type: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            default: ''
        }
    }
);

module.exports = mongoose.model('feedbacks', FeedbackSchema);;