const ProductModel = require("../models/ProductModel");

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

const UpdateProductController = async (req, res) => {
    try {
        const _id = req.params.id;
        const {
            name,
            type,
            enType,
            brand,
            price,
            color,
            hotDeal,
            featured,
            status
        } = req.body;

        const infoProduct = await ProductModel.findByIdAndUpdate(
            _id,
            {
                name,
                type,
                enType,
                brand,
                price,
                color,
                hotDeal,
                featured,
                status
            },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thông tin thành công",
            infoProduct,
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

// Update ảnh đại diện
const UpdateImageLink = async (req, res) => {
    try {
        const _id = req.params.id;
        const { imageLink } = req.body;

        const infoProduct = await ProductModel.findByIdAndUpdate(
            _id, { imageLink }, { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thành công",
            infoProduct,
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

// Update ảnh banner
const UpdateImageBanner = async (req, res) => {
    try {
        const _id = req.params.id;
        const { imagePrimary } = req.body;

        const infoProduct = await ProductModel.findByIdAndUpdate(
            _id, { imagePrimary }, { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thành công",
            infoProduct,
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

const UpdateImageList = async (req, res) => {
    try {
        const _id = req.params.id;
        const { imageList } = req.body;

        const infoProduct = await ProductModel.findByIdAndUpdate(
            _id, { imageList }, { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thành công",
            infoProduct,
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

const VoteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const { star } = req.body;

        const infoProduct = await ProductModel.findByIdAndUpdate(
            _id,
            {
                $inc: { voter: 1 },
                $set: { star: star }
            },
            { new: true }
        );
        res.status(200).send({
            success: true,
            messsage: "Cập nhật thông tin thành công",
            infoProduct,
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

// Xóa sản phẩm
const DeleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        await ProductModel.deleteOne({ _id: _id });
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
    CreateProductController,
    UpdateProductController,
    UpdateImageLink,
    UpdateImageBanner,
    UpdateImageList,
    DeleteProduct,
    VoteProduct
};