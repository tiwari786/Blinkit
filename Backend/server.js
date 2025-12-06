const express = require("express")
const connectDB = require("./config/db")
const userRouter = require("./routes/userRouter")
const cookieParser = require('cookie-parser')
const server = express()
const port = 3000

server.use(cookieParser())
server.use(express.json())

server.use("/api/v1/user", userRouter)

server.listen(port, ()=>{
    connectDB()
    console.log("Server is running on port 3000")
})