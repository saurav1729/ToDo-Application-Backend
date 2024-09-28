const ToDo = require('../model/ToDoModel');


const getToDo = async(req,res)=>{
    try{
    const AllToDo = await ToDo.find({});
    res.status(200).json(
        { 
            success:true,
            data:AllToDo,
            message:"Entire todos are fetched"
        }
    )
    }catch(err){
        console.log(err);
        res.status(501).json({
            success:false,
            data:"error in fetching data",
            message:err.message
        })

    }
    
}


const getToDoById = async(req,res)=>{
    try{
    const{id}= req.params; 
    const response = await ToDo.findById({_id:id});
    res.status(200).json({
        success:true,
        data:response,
        message:`ToDo for ${id} fetched`
    })
}catch(err){
    console.log(err);
    res.status(501).json({
        success:false,
        data:"internal server error",
        message:err.message,
    })

}
}

module.exports = {getToDo,getToDoById}