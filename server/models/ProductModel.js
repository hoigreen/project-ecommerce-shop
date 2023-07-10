const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
    {
        imagePrimary: {
            type: String,
            default: ""
        },
        imageLink: {
            type: String,
            default: ""
        },
        imageList: {
            type: Array,
            default: []
        },
        name: {
            type: String,
            required: true,
        },
        enType: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        type: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        option: {
            type: Array,
            default: [],
            required: true,
        },
        color: {
            type: Array,
            default: [],
            required: true,
        },
        status: {
            type: String
        },
        star: {
            type: Number,
            default: 0,
            required: true,
        },
        voter: {
            type: Number,
            default: 0,
            required: true,
        },
        hotDeal: {
            type: Boolean,
            default: false,
            required: true,
        },
        featured: {
            type: Boolean,
            default: false,
            required: true,
        },
        percent: {
            type: Number,
            default: 0,
            required: true,
        },

    }
);

module.exports = mongoose.model('products', ProductSchema);;