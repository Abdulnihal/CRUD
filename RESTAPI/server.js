const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
const mongoose = require('mongoose')
require('dotenv/config');
require('./models/Post')
const postRoute=require('./Routes/posts');
app.use('/blogs',postRoute);





//connecting to mongo db address
//const mongoUri = "mongodb+srv://NIHAL:NIHAL@cluster0.epemp.mongodb.net/NIHAL?retryWrites=true&w=majority"

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})





app.listen(4000,()=>{
    console.log("server running")
})