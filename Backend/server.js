const express = require("express")
const connectDB = require("./config/db")
const server = express()
const port = 3000


server.listen(port, ()=>{
    connectDB()
    console.log("Server is running on port 3000")
})