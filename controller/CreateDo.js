const ToDo = require('../model/ToDoModel');


const createToDo = async(req,res)=>{
    try{
        const {title, description}=req.body; 
        const response = await ToDo.create({title,description});
        res.status(200).json(
            {
                success:true,
                data:response, 
                message:"Entry create successfully"
            }
        )

        }catch(err){
            console.log(err);
            res.status(500).json({
                success:false,
                data:"Internal server error",
                message:err.message
            })
        }
}

module.exports = {createToDo};