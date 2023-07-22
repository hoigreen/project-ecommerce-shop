const multer = require('multer')

// User
const storageImageUsers = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/users');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

// Admin
const storageAvatarAdmins = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/admins');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

// Product
const storageImageLinkProduct = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/products');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

// Promote

const storageImagePromote = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/promotes');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});


const uploadAvatarAdmin = multer({ storage: storageAvatarAdmins });

const uploadAvatarUser = multer({ storage: storageImageUsers });

const uploadImageLinkProduct = multer({ storage: storageImageLinkProduct });

const uploadImagePromote = multer({ storage: storageImagePromote });

module.exports = {
    uploadAvatarAdmin,
    uploadAvatarUser,
    uploadImageLinkProduct,
    uploadImagePromote
}