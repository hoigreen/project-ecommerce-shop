const UserModel = require("../models/UserModel");
// import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
// import JWT from "jsonwebtoken";

const RegisterController = async (req, res) => {
    try {
        const { username, email, password, fullname, phone, address } = req.body;
        //validations
        if (!username) {
            return res.send({ error: "Name is Required" });
        }
        if (!email) {
            return res.send({ error: "Email is Required" });
        }
        if (!password) {
            return res.send({ error: "Password is Required" });
        }
        if (!phone) {
            return res.send({ error: "Phone no is Required" });
        }
        if (!address) {
            return res.send({ error: "Address is Required" });
        }
        if (!fullname) {
            return res.send({ error: "Address is Required" });
        }

        // //Kiểm tra trùng
        // const checkExisted = await UserModel.findOne({ userID });
        // //exisiting user
        // if (checkExisted) {
        //     return res.status(200).send({
        //         success: true,
        //         message: "Already Register please login",
        //     });
        // }
        //register user
        // const hashedPassword = await hashPassword(password);

        // Đăng ký tài khoản mới
        const user = await new UserModel({
            username,
            password,
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