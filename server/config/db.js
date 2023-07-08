const mongoose = require('mongoose');;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Conneted To Mongodb Databse ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`);
    }
}

module.exports = connectDB;