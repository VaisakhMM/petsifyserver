const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true
    },
    phonenumber:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    street:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    postal:{
        type:String,
        require:true
    },
    
    country:{
        type:String,
        require:true
    },
    userId:{
        type:String,
        require:true
    }



},{ collection: 'contactServer' })

const contacts = mongoose.model("contacts",contactSchema)


module.exports = contacts;