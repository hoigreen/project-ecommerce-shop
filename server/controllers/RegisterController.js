const UserModel = require("../models/UserModel");
const { HashPassword } = require("../utils")

const RegisterController = async (req, res) => {
    try {
        const { username, email, password, fullname, phone, address } = req.body;
        //validations
        if (!username) {
            return res.send({ error: "Tên là bắt buộc" });
        }
        if (!email) {
            return res.send({ error: "Email là bắt buộc" });
        }
        if (!password) {
            return res.send({ error: "Mật khẩu là bắt buộc" });
        }
        if (!phone) {
            return res.send({ error: "Số điện thoại là bắt buộc" });
        }
        if (!address) {
            return res.send({ error: "Địa chỉ là bắt buộc" });
        }
        if (!fullname) {
            return res.send({ error: "Họ tên là bắt buộc" });
        }

        //Kiểm tra trùng
        const checkExisted = await UserModel.findOne({ username });

        // User đã tồn tại
        if (checkExisted) {
            return res.status(200).send({
                success: true,
                message: "Tài khoản này đã đăng ký bởi người khác!"
            });
        }

        // Đăng ký người dùng mới
        const hashedPassword = await HashPassword(password);

        // Đăng ký tài khoản mới
        const user = await new UserModel({
            username,
            password: hashedPassword,
            fullname,
            email,
            phone,
            address
        }).save();

        res.status(201).send({
            success: true,
            message: "Đăng ký tài khoản thành công",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi khi đăng ký tài khoản",
            error,
        });
    }
};

module.exports = RegisterController;