const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const genrateToken = require("../utils/genrateToken");

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

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Login successfully",
                success: true
            })
        }

        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "User not registerd",
                success: false
            })
        }

        const isMatched = await bcrypt.compare(password, user.password)
        if (!isMatched) {
            return res.status(400).json({
                message: "Wrong password "
            })
        }

        // token genrate
        const token = genrateToken(user._id)

        //set token in cookie
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "strict",
            secure: false
        })

        return res.status(200).json({
            message: "Login successfully",
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}