const AdminModel = require("../models/AdminModel");
const { ComparePassword } = require("../utils")
const JWT = require("jsonwebtoken");

const LoginAdminController = async (req, res) => {
    try {
        const { adminName, password } = req.body;
        //validation
        if (!adminName || !password) {
            return res.status(404).send({
                success: false,
                message: "Tài khoản hoặc mật khẩu không hợp lệ!",
            });
        }

        // Kiểm tra tồn tại
        const admin = await AdminModel.findOne({ adminName });
        if (!admin) {
            return res.status(404).send({
                success: false,
                message: "Tài khoản admin không đúng!",
            });
        }

        const compare = await ComparePassword(password, admin.password);
        if (!compare) {
            return res.status(200).send({
                success: false,
                message: "Tên tài khoản hoặc mật khẩu không chính xác!",
            });
        }

        //token
        const token = await JWT.sign({ _id: admin._id }, process.env.JWT_SECRET_ADMIN, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success: true,
            message: "Đăng nhập thành công",
            admin: {
                _id: admin._id,
                adminName: admin.adminName,
                fullname: admin.fullname,
                email: admin.email,
                phone: admin.phone,
                adddress: admin.address,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi khi đăng nhập",
            error,
        });
    }
};

module.exports = LoginAdminController;