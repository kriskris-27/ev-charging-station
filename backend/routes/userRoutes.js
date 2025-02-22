const express = require('express');
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const roleMiddleware = require('../middlewares/roleMiddleware'); // Ensure the file name and path are correct

// only super-admin aka kris
router.get("/superadmin", verifyToken, roleMiddleware("superadmin"), (req, res) => {
    res.json({ message: "WELCOME KRIS" });
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
