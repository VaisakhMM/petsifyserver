const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    petname:{
        type:String,
        require:true
    },
    pettype:{
        type:String,
        require:true
    },
    breed:{
        type:String,
        require:true
    },
    vaccinated:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    spayed:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    
    image:{
        type:String,
        require:true
    },
    username:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    additionalInfo:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
   
    userId:{
        type:String,
        require:true
    }



},{ collection: 'petServer' })

const projects = mongoose.model("projects",projectSchema)


module.exports = projects;