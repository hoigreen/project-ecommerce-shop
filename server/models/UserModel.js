const mongoose = require('mongoose')

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
        cart: {
            type: Array,
            default: [],
            required: true
        },
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

module.exports = mongoose.model('data-user', UserSchema);;