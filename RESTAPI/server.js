const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./models/Book')

app.use(bodyParser.json())

const Book = mongoose.model("book")


const mongoUri = "mongodb+srv://NIHAL:NIHAL@cluster0.epemp.mongodb.net/NIHAL?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo yeahhh")
})
mongoose.connection.on("error",(err)=>{
    console.log("error",err)
})


app.get('/',(req,res)=>{
    Book.find({}).then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
    
    
})



app.post('/send',(req,res)=>{
     const book = new Book({
        title:req.body.title,
         description:req.body.description,

     })
     book.save()
     .then(data=>{
         console.log(data)
         res.send(data)
     }).catch(err=>{
         console.log(err)
     })
     
})

app.post('/delete',(req,res)=>{
    Book.findByIdAndRemove(req.body.id)
    .then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.post('/update',(req,res)=>{
    Book.findByIdAndUpdate(req.body.id,{
        title:req.body.title,
        description:req.body.description,
     
    }).then(data=>{
        console.log(data)
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})



app.listen(4000,()=>{
    console.log("server running")
})