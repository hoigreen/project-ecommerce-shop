const mongoose = require('mongoose')

const PromoteModel = new mongoose.Schema(
    {
        imageLink: {
            type: String,
            default: ""
        },
        name: {
            type: String,
            required: true,
        },
        timeStart: {
            type: String,
            required: true,
        },
        timeEnd: {
            type: String,
            required: true,
        },
        percent: {
            type: Number,
            default: 0,
            required: true,
        },
        apply: {
            type: String
        }

    }
);

module.exports = mongoose.model('promotes', PromoteModel);;