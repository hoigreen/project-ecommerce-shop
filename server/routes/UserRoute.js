const express = require('express');
const UserModel = require('../models/UserModel');
const {
    RegisterController,
    LoginController,
    UpdateInfo,
    IncreaseQuantityProductInCart,
    DecreaseQuantityProductInCart,
    RemoveProductInCart,
    RemoveAllInCart,
} = require('../controllers/UserControllers')

const { RequireSignIn } = require("../middlewares/MiddleWares");
const router = express.Router();


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

// Đăng ký
router.post("/register", RegisterController);


// Đăng nhập
router.post("/login", LoginController);

// Cập nhật thông tin cá nhân
router.put("/update/:id", UpdateInfo, RequireSignIn)

// Giỏ hàng
// Tăng số lượng của 1 sản phẩm trong giỏ hàng
router.put("/increase-quantity-product-in-cart/:id", IncreaseQuantityProductInCart)

// Giảm số lượng của 1 sản phẩm trong giỏ hàng
router.put("/decrease-quantity-product-in-cart/:id", DecreaseQuantityProductInCart)

// Xóa 1 sản phẩm trong giỏ hàng
router.put("/remove-product-in-cart/:id", RemoveProductInCart)

// Xóa toàn bộ sản phẩm trong giỏ hàng
router.put("/remove-all-in-cart/:id", RemoveAllInCart)

module.exports = router;