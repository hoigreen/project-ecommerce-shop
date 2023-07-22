const express = require('express');
const LoginAdminController = require('../controllers/LoginAdminController');
const AdminModel = require('../models/AdminModel');
const UserModel = require('../models/UserModel');
const { uploadAvatarAdmin } = require('../middlewares/uploadToCloud');
const router = express.Router();

// Get All Admin
router.get("/", async (req, res) => {
    try {
        const admins = await AdminModel.find();
        res.json(admins);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get Admin Login
router.get("/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const admin = await AdminModel.findById({ _id });
        res.json(admin);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Login
router.post("/login", LoginAdminController);

// Update info
router.put("/update-info/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const { avatarUrl, fullname, email, phone, address } = req.body;
        const adminInfoUpdate = await AdminModel.findByIdAndUpdate(
            _id,
            { avatarUrl: avatarUrl, fullname, email, phone, address },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thông tin thành công",
            adminInfoUpdate,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
});

// Update info user
router.put("/update-info-user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const { fullname, email, phone, address } = req.body;
        const infoUpdate = await UserModel.findByIdAndUpdate(
            _id,
            { fullname, email, phone, address },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thông tin khách hàng thành công",
            infoUpdate,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
});

// Upload avatar admin
router.post('/upload-image', uploadAvatarAdmin.single('avatar-admin'), (req, res) => {
    res.status(200).json({ message: 'Thành công', path: req.file.path });
});

module.exports = router;