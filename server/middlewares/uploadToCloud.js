const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const dotenv = require('dotenv');

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

// Admin
const storageAvatarAdmin = new CloudinaryStorage({
    cloudinary,
    allowFormats: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    params: {
        folder: "shoptech/admins",
        use_filename: true
    },
});

// Users
const storageAvatarUser = new CloudinaryStorage({
    cloudinary,
    allowFormats: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    params: {
        folder: "shoptech/users",
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Product
const storageImageProduct = new CloudinaryStorage({
    cloudinary,
    allowFormats: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    params: {
        folder: "shoptech/products",
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Promote
// Product
const storageImagePromote = new CloudinaryStorage({
    cloudinary,
    allowFormats: ['png', 'jpg', 'jpeg', 'gif', 'webp'],
    params: {
        folder: "shoptech/promotes",
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const uploadAvatarAdmin = multer({ storage: storageAvatarAdmin });
const uploadAvatarUser = multer({ storage: storageAvatarUser });
const uploadImageProduct = multer({ storage: storageImageProduct });
const uploadImagePromote = multer({ storage: storageImagePromote });

module.exports = {
    uploadAvatarAdmin,
    uploadAvatarUser,
    uploadImageProduct,
    uploadImagePromote
}
