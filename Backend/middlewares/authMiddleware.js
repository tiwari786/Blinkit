const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")
dotenv.config()

module.exports = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }

    try {
        const decod = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decod
        next()
    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }
}