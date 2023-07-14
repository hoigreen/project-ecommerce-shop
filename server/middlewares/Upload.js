const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/admins'); // Thư mục lưu trữ ảnh
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Đặt tên file dựa trên thời gian và tên gốc của file
    },
});

module.exports = multer({ storage });