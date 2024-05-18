const { mongoose} = require("mongoose");

const Guest= new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Email:{
        type:String
    },
    Guest:{
        type:Number
    }
});
const GuestDB= mongoose.model("Guest",Guest);
module.exports= GuestDB;