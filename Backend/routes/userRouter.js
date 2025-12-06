const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/register").post(registerUser);
userRouter.route("/login").post(loginUser);

module.exports = userRouter