const projects = require('../Models/projectSchema')

exports.addProject = async (req,res)=>{
    console.log("Inside add project");
    const userId = req.payload;
    console.log(userId);
    const image = req.file.filename;
    console.log(image);
    const {petname,pettype,breed,vaccinated,gender,spayed,age,additionalInfo,username,address,phone,price}=req.body;
    try{
        const existingProject = await projects.findOne({phone: phone, userId: userId});
        if(existingProject){
            res.status(406).json("This submit form already exist")
        }
        else{
        const newDoner= new projects({
            petname:petname,
            pettype:pettype,
            breed:breed,
            vaccinated:vaccinated,
            gender:gender,
            spayed:spayed,
            age:age,
            additionalInfo:additionalInfo,
            username:username,
            address:address,
            phone:phone,
            price:price,
            image:image,
            userId:userId

        })
        await newDoner.save();
        res.status(200).json("Project added successfully")
    }

    }catch(err){
        res.status(401).json("Unable to add project duw to:",err)
    }
}

exports.getMainProject = async(req,res)=>{
   
    try{
        const mainProject = await projects.find();
        res.status(200).json(mainProject)

    }catch(err){
        res.status(401).json("Request failed due to",err)
    }
}

exports.getUserProject  = async (req,res)=>{
    const userId = req.payload
    try{
        const userProject = await projects.find({userId:userId});
        res.status(200).json(userProject)
    }catch(err){
        res.status(401).json("Request failed due to", err)
    }
}

exports.deleteUserProject = async(req,res)=>{
    const {id} = req.params
    try{
        const removeProject = await projects.findByIdAndDelete({_id:id})
        res.status(200).json("Project deleted successfully")
    }catch(err){
        res.status(401).json("delete failed", err)
    }
}