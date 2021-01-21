  
const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({

    title: {
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    }

})


mongoose.model("book",BookSchema)