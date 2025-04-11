const express = require('express')
const dbConnect =require('./config/db')
const dotenv=require('dotenv').config();
const authRoutes=require("./routes/authRoutes")
const userRoutes =require("./routes/userRoutes")
const mapRoutes = require("./routes/mapRoute")

const cors = require('cors');
const app =express();
app.use(cors());

// Middleware
app.use(express.json())

// Connect to MongoDB
dbConnect();

// Routes
 app.use("/api/auth",authRoutes)
 app.use("/api/users",userRoutes)
 app.use("/api/testapi",mapRoutes)


//start server
const PORT=3005 || 3006
app.listen(PORT,(error)=>{
    if(!error)
        console.log("Server running successfully on port 3005 or 3006")
    else
        console.log("Error occured",error);
})


app.get('/',(req,res)=>{
    res.send("HI from ev  API ")
});