const userModel = require("../models/userModel");
const bcrypt = require("bcrypt")

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Provide all data",
                success: false
            })
        }

        const user = await userModel.findOne({ email })
        if (user) {
            return res.status(400).json({
                message: "user already exist",
                success: false
            })
        }

        const hasedPassword = await bcrypt.hash(password, 10)

        await userModel.create({
            name, email, password: hasedPassword
        })

        return res.status(200).json({
            message: "User created successfully",
            success: true
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}