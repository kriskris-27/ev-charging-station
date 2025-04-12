const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
    name:{
        type:String,required:true

    },
    lat:{
        type:Number,required:true

    },
    lon:{
        type:Number,required:true


    },
    // ports:{
    //     type:Number,default:1
    // },
    createdAt: { type: Date, default: Date.now }

});

module.exports=mongoose.model('Station',stationSchema);