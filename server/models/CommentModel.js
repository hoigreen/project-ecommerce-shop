const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema(
    {
        nameProductVoted: {
            type: String,
            default: ""
        },
        owner: {
            type: String,
            trim: true
        },
        ownerAvatar: {
            type: String
        },
        ownerName: {
            type: String,
        },
        time: {
            type: String,
        },
        content: {
            type: String,
        },
        starVoted: {
            type: Number,
        }
    }
);

module.exports = mongoose.model('comments', CommentSchema);;