const jwt = require("jsonwebtoken")

const genrateToken = (userId) => {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    )
}

module.exports = genrateToken;