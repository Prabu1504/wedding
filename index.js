const express= require("express");
const connect=require("./common/connection.js");
const router =require("./routes/userRoutes.js")
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

const port=5760;

connect();
app.use(router)
app.listen(port,()=>{
    console.log("port is the running :",port)
})
