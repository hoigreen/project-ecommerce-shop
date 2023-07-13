const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema(
    {
        imageLink: {
            type: String,
            default: ""
        },
        productName: {
            type: String,
            required: true,
            unique: true,
        },
        option: {
            type: String,
            default: '',
            required: true
        },
        color: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true
        },
        percent: {
            type: Number,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
        },
        voted: {
            type: Boolean,
            required: true,
            default: false
        }
    }
);

const UserSchema = new mongoose.Schema(
    {
        avatarUrl: {
            type: String,
            default: ""
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        cart: [CartSchema],
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true,
        }
    }
);

module.exports = mongoose.model('users', UserSchema);;