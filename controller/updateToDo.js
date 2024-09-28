const ToDo = require('../model/ToDoModel');


const updateToDo = async(req,res)=>{
    try{
    const {id}=req.params; 
    const {title , description}= req.body; 
    const response = await ToDo.findByIdAndUpdate(
        {_id:id},  
        { title, description, updatedAt: Date.now() },  
        { new: true } 
    );
    res.status(200).json({
        success:true, 
        data:response, 
        message:`ToDo is update for id ${id}`
    })
}catch(err){
    console.log(err); 
    res.status(501).json({
        success:false, 
        data:"Internal server error",
        message:err.message
    })
}
}


module.exports = {updateToDo};