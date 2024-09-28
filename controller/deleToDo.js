const ToDo = require('../model/ToDoModel');


const deleteToDo = async(request, response)=>{
    try{
    const {id}=request.params;
    await ToDo.findByIdAndDelete(
        {_id:id}
    )
    
    response.status(200).json({
        success:true,
        data:"deleted successfully",
        message:`toDo for id ${id} deleted`
    })
}catch(err){
    console.log(err);
    response.status(501).json({
        success:false,
        data:"Internal server error",
        message:err.message
    })
}
}


module.exports = {deleteToDo};