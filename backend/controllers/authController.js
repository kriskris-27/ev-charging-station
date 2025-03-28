const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

// const register =async (req,res)=>{

//     try{
//     const {username,password,role} = req.body;
//     const hashedPassword =await bcrypt.hash(password, 10);
//     const newUser = new User({username,password:hashedPassword,role});
//     await newUser.save()
//     res.status(201).json({message:`User registered with username ${username}`})
//     } catch(err){
//         res.status(500).json({messgae:`Something went wrong ${err}`});
        

//     }
// }

const login =async(req,res)=>{
    try{
    const {username,password} = req.body;
    const user= await User.findOne({username});
    if(!user){
        return res.status(404).json({message:`Something went wrong`})
    }
    const isMatch =await bcrypt.compare(password,user.password)
    if(!isMatch){
        return res.status(400).json({message:`Invalid credentails no user found`})
    }
    const token = jwt.sign(
        {id:user._id,role:user.role}, process.env.JWT_SECRET,
        {expiresIn:"1h"}
    );
    res.status(200).json({message:`login successful kris || super1`,token})
    
} catch(err){
    res.status(500).json({message:`Something went wrong`});
}
}

module.exports={
    // register,
    login
}