const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema(
    {
        avatarUrl: {
            type: String,
            default: ""
        },
        adminName: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
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

module.exports = mongoose.model('admins', AdminSchema);;