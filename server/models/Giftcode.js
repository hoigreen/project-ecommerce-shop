const mongoose = require('mongoose')

const GiftcodeSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            default: "",
            required: true,
        },
        describe: {
            type: String,
            required: true,
            trim: true
        },
        percentReduce: {
            type: Number,
            required: true,
        },
        applyFor: {
            type: String,
            default: ''
        }
    }
);

module.exports = mongoose.model('giftcodes', GiftcodeSchema);;