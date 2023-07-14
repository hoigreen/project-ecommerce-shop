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

const uploadAvatarAdmin = multer({ storage: storageAvatarAdmins });

const uploadAvatarUser = multer({ storage: storageImageUsers });

module.exports = {
    uploadAvatarAdmin,
    uploadAvatarUser
}