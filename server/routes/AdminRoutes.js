const express = require('express');
const LoginAdminController = require('../controllers/admin/LoginAdminController');
const AdminModel = require('../models/AdminModel');
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

module.exports = router;