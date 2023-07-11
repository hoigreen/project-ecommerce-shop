const OrderModel = require("../models/OrderModel");

const CreateProductController = async (req, res) => {
    try {
        const {
            imagePrimary,
            imageLink,
            imageList,
            name,
            type,
            enType,
            brand,
            price,
            option,
            color,
            status,
            star,
            voter,
            hotDeal,
            featured,
            percent } = req.body;

        //Kiểm tra trùng
        const checkExisted = await ProductModel.findOne({ name });

        // Nếu sản phẩm tồn tại
        if (checkExisted) {
            return res.status(200).send({
                success: true,
                message: "Sản phẩm đã tồn tại!"
            });
        }

        const product = await new ProductModel({
            imagePrimary,
            imageLink,
            imageList,
            name,
            type,
            enType,
            brand,
            price,
            option,
            color,
            status,
            star,
            voter,
            hotDeal,
            featured,
            percent
        }).save();

        res.status(201).send({
            success: true,
            message: "Thêm sản phẩm thành công",
            product,
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

const UpdateStatusOrder = async (req, res) => {
    try {
        const _id = req.params.id;
        const status = await OrderModel.findByIdAndUpdate(
            _id,
            { status: "Giao hàng thành công" },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật trạng thái đơn hơn thành công",
            status,
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

module.exports = {
    CreateProductController,
    UpdateStatusOrder
};