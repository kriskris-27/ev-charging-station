const express = require("express")
const {register,login} = require("../controllers/authController")
const router = express.Router()
const Station =require('../models/stationModel');
const verifyToken = require("../middlewares/authMiddleware");

// router.post("/register",register)
router.post("/login",login)

router.post('/addstation',verifyToken,async (req,res)=>{
    try{
        const {name,lat,lon} =req.body;
        if(!name || !lat || !lon ){
            return res.status(400).json({ message: 'Name, latitude, longitude are required.' });
        }
        const newStation =new Station({
            name,lat,lon
        });
        await newStation.save()
        res.status(201).json({ message: 'Station added successfully', station: newStation });
    }catch(error){
        console.log(error);
        res.status(500).json({message:'Server error'});

    }
   
});

module.exports=router
