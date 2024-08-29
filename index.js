//1) import dotenv

require('dotenv').config()

//2) import express

const express = require('express')

require('./DB/connection')

//import router

const router= require('./Routes/router')

//3) import cors

const cors = require('cors')

//4) create server

const petServer = express()

//5) use cors

petServer.use(cors())

//6) use middleware to convert json to jsobject

petServer.use(express.json())

petServer.use(router)

petServer.use('/uploads',express.static('./uploads'))


//7) Define port

const PORT = 5000;

//8) run the server

petServer.listen(PORT,()=>{
    console.log("server is running in port:",PORT);
})
    
petServer.get('/',(req,res)=>{
    res.send("Pet Server is running successfully")
})



