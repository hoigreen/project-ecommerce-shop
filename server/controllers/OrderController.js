const OrderModel = require("../models/OrderModel");

const CreateOrder = async (req, res) => {
    try {
        const {
            orderID,
            owner,
            fullname,
            email,
            phone,
            method,
            address,
            note,
            price,
            giftcodeApply,
            time,
            status,
            lists
        } = req.body;

        //Kiểm tra trùng
        const checkExisted = await OrderModel.findOne({ orderID });

        if (checkExisted) {
            return res.status(200).send({
                success: true,
                message: "Đơn hàng đã tồn tại"
            });
        }

        const order = await new OrderModel({
            orderID,
            owner,
            fullname,
            email,
            phone,
            method,
            address,
            note,
            price,
            giftcodeApply,
            time,
            status,
            lists
        }).save();

        res.status(201).send({
            success: true,
            message: "Tạo đơn hàng thành công",
            order,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi khi tạo đơn hàng",
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

const UpdateStatusVoteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const { productName } = req.body;
        // const status3 = await OrderModel.findByIdAndUpdate(
        //     _id,
        //     { $set: { 'lists.$[element].voted': true } },
        //     {
        //         arrayFilters: [{ 'element.productName': productName }],
        //         new: true
        //     }
        // )

        const status = await OrderModel.findByIdAndUpdate(
            _id,
            { $set: { "lists.$.voted": true } },
            { arrayFilters: [{ "productName": productName }], new: true }
        )
        res.status(200).send({
            success: true,
            messsage: "Đã đánh giá thành công",
            status
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
    CreateOrder,
    UpdateStatusOrder,
    UpdateStatusVoteProduct
};