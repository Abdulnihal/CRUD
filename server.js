const { response, request } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv/config');

const app=express();
app.use(cors());

app.use(bodyParser.json());


const postsRoute=require('./Routes/posts');
app.use('/posts',postsRoute);




//POSTS
app.get('/',(req,res)=>{
    res.send('we are home');
});

app.get('/posts',(req,res)=>{
    res.send('we are');
});

//DBCONNECT
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },()=>
console.log('connected to db')
)

app.listen(4000);
