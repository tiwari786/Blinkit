const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { dbName: "blinkit" })
        console.log("Database is connected successfully")
    } catch (error) {
        console.log("Error in connecting db")
    }
}

module.exports = connectDB;