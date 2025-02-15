const express = require('express')
const connectDB =require('./config/db')
const authRoutes =require('./routes/authRoutes')
const adminRoutes = require('./routes/adminRoutes');
const cors =require('cors')
require('dotenv').config();


const PORT=3005
const app =express();

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth',authRoutes);
app.use('/api/admin', adminRoutes); 

//start server
app.listen(PORT,(error)=>{
    if(!error)
        console.log("Server running successfully on port 3005")
    else
        console.log("Error occured",error);
})