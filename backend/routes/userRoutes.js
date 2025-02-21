const express = require("express")
const verifyToken=require("../middlewares/authMiddleware")
const authorizeRoles=require("../middlewares/roleMIddleware")
const router = express.Router();

// only super-admin aka kris
router.get("/superadmin",verifyToken,authorizeRoles("superadmin"),(req,res) => {
    res.json({message:"WELCOME KRIS"})
});
//Both admin and kris
// router.get("/admin",verifyToken,authorizeRoles("superadmin","admin"),(req,res) => {
//     res.json({message:"WELCOME ADMINS"})
// });
//All can access
// router.get("/user",verifyToken,authorizeRoles("superadmin","admin","user"),(req,res) => {
//     res.json({message:"HELLO USER"})
// });

module.exports = router;
