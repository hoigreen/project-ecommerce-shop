const PromoteModel = require("../models/PromoteModel");

const CreatePromote = async (req, res) => {
    try {
        const {
            imageLink,
            name,
            timeStart,
            timeEnd,
            percent,
            apply } = req.body;

        const promote = await new PromoteModel({
            imageLink,
            name,
            timeStart,
            timeEnd,
            percent,
            apply
        }).save();

        res.status(201).send({
            success: true,
            message: "Tạo mới khuyến mãi thành công",
            promote,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra lỗi khi khi thêm chương trình khuyến mãi",
            error,
        });
    }
};

const UpdatePromote = async (req, res) => {
    try {
        const _id = req.params.id;
        const {
            imageLink,
            name,
            timeStart,
            timeEnd,
            percent,
            apply
        } = req.body;

        const infoPromoteNew = await PromoteModel.findByIdAndUpdate(
            _id,
            {
                imageLink,
                name,
                timeStart,
                timeEnd,
                percent,
                apply
            },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thông tin thành công",
            infoPromoteNew,
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

// Xóa chương trình khuyến mãi
const DeletePromote = async (req, res) => {
    try {
        const _id = req.params.id;
        await PromoteModel.deleteOne({ _id: _id });
        res.status(200).send({
            success: true,
            message: "Xóa thành công"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Đã xảy ra một lỗi nào đó",
            error,
        });
    }
};

module.exports = {
    CreatePromote,
    UpdatePromote,
    DeletePromote
};