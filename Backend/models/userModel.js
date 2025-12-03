const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    add_line: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }

}, { timestamps: true })


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile_image: {
        type: String,
        default: null
    },
    contact: {
        type: String,
        default: null
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters long"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    status: {
        type: Boolean,
        default: true
    },
    address: {
        type: [addressSchema],
        default: []
    }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
module.exports = userModel;