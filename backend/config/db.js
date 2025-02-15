// backend/config/db.js
const mongoose = require('mongoose');

const dbConnect = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`database connected:${connect.connection.host},${connect.connection.name}`)
    }
    catch(err) {
        console.log("error in db connection",err)
        process.exit(1)
    }
      
}

module.exports=dbConnect;
