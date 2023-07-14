const express = require('express');
const multer = require("multer");

const LoginAdminController = require('../controllers/LoginAdminController');
const AdminModel = require('../models/AdminModel');
const UserModel = require('../models/UserModel');
// const Upload = require('../middlewares/Upload');
// const Upload = require('../middlewares/Upload');
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
// Middlewares multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/admins'); // Thư mục lưu trữ ảnh
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Đặt tên file dựa trên thời gian và tên gốc của file
    },
});

const uploadAvatarAdmin = multer({ storage });

router.post('/upload-image', uploadAvatarAdmin.single('avatar-admin'), (req, res) => {
    const imagePath = req.file.path; // Đường dẫn đến ảnh đã upload
    console.log(imagePath)
    res.status(200).json({ error: 'Upload failed' });
});

module.exports = router;