const express = require('express');
const UserModel = require('../models/UserModel');
const {
    RegisterController,
    LoginController,
    TestController,
} = require('../controllers/UserControllers')

const { RequireSignIn } = require("../middlewares/MiddleWares");

//router object
const router = express.Router();

//routing
// GET All
router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get User Login
router.get("/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await UserModel.findById({ _id });
        res.json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

router.post("/register", RegisterController);

router.post("/login", LoginController);

//test routes
router.get("/test", TestController, RequireSignIn);

module.exports = router;