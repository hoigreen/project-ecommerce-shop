const bcrypt = require('bcrypt');

const ComparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

module.exports = ComparePassword;