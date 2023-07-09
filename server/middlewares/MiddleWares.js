const JWT = require('jsonwebtoken');

// Bảo vệ đường dẫn bằng token
const RequireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { RequireSignIn }