const UserModel = require("../models/UserModel");
const { ComparePassword, HashPassword } = require("../utils");
const JWT = require("jsonwebtoken");


const LoginController = async (req, res) => {
    try {
        const { username, password } = req.body;

        //validation
        if (!username || !password) {
            return res.status(404).send({
                success: false,
                message: "Tài khoản hoặc mật khẩu không hợp lệ",
            });
        }

        // Kiểm tra user
        const user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Tài khoản không tồn tại!",
            });
        }

        const compare = await ComparePassword(password, user.password);
        if (!compare) {
            console.log(password, user.password)
            console.log(compare)
            return res.status(200).send({
                success: false,
                message: "Tên tài khoản hoặc mật khẩu không chính xác",
            });
        }

        //token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "3d",
        });

        res.status(200).send({
            success: true,
            message: "Đăng nhập thành công",
            user: {
                _id: user._id,
                username: user.username,
                fullname: user.fullname,
                email: user.email,
                phone: user.phone,
                adddress: user.address,
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


const RegisterController = async (req, res) => {
    try {
        const {
            avatarUrl,
            username,
            password,
            fullname,
            email,
            phone,
            address,
            cart
        } = req.body;
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
        console.log(checkExisted)

        // User đã tồn tại
        if (checkExisted) {
            return res.status(200).send({
                success: true,
                message: "Tài khoản này đã đăng ký bởi người khác!"
            });
        } else {
            // Đăng ký người dùng mới
            const hashedPassword = await HashPassword(password);

            // Đăng ký tài khoản mới
            const user = await new UserModel({
                avatarUrl,
                username,
                password: hashedPassword,
                fullname,
                email,
                phone,
                address,
                cart
            }).save();

            res.status(201).send({
                success: true,
                message: "Đăng ký tài khoản thành công",
                user,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi khi đăng ký tài khoản",
            error,
        });
    }
};

const TestController = (req, res) => {
    try {
        res.send("Protected Routes");
    } catch (error) {
        console.log(error);
        res.send({ error });
    }
};

const UpdateInfo = async (req, res) => {
    try {
        const _id = req.params.id;
        const { avatarUrl, fullname, email, phone, address } = req.body;
        const infoUpdate = await UserModel.findByIdAndUpdate(
            _id,
            { avatarUrl, fullname, email, phone, address },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thông tin  thành công",
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
}

const AddProductToCart = (req, res) => {
    try {
        const _id = req.params.id;
        const item = req.body;

        UserModel.findByIdAndUpdate(
            _id,
            { $push: { cart: item } },
            { new: true }
        )
            .then(updatedUser => {
                res.status(200).json(updatedUser);
            })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
}

const IncreaseQuantityProductInCart = async (req, res) => {
    try {
        const _id = req.params.id;
        const { productName } = req.body;

        UserModel.findByIdAndUpdate(
            _id,
            { $inc: { "cart.$[elem].quantity": 1 } },
            { arrayFilters: [{ "elem.productName": productName }] }
        )
            .then(updatedUser => {
                res.status(200).json(updatedUser);
            })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
}

const DecreaseQuantityProductInCart = async (req, res) => {
    try {
        const _id = req.params.id;
        const { productName } = req.body;
        console.log(productName);

        UserModel.findByIdAndUpdate(
            _id,
            { $inc: { "cart.$[elem].quantity": -1 } },
            { arrayFilters: [{ "elem.productName": productName }] }
        )
            .then(updatedUser => {
                res.status(200).json(updatedUser);
            })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
}

const RemoveProductInCart = async (req, res) => {
    try {
        const _id = req.params.id;
        const { productName } = req.body;
        console.log(productName);

        UserModel.findByIdAndUpdate(
            _id,
            { $pull: { cart: { productName: productName } } },
        )
            .then(updatedUser => {
                res.status(200).json(updatedUser);
            })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
}

const RemoveAllInCart = async (req, res) => {
    try {
        const _id = req.params.id;

        UserModel.findByIdAndUpdate(_id, { cart: [] },
        )
            .then(updatedUser => {
                res.status(200).json(updatedUser);
            })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while updating",
        });
    }
}

module.exports = {
    LoginController,
    RegisterController,
    TestController,
    UpdateInfo,
    IncreaseQuantityProductInCart,
    DecreaseQuantityProductInCart,
    RemoveProductInCart,
    RemoveAllInCart,
    AddProductToCart
};