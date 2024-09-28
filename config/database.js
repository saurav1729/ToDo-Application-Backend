const mongoose = require("mongoose");

require('dotenv').config();


const dbconnect = async()=>{

 mongoose.connect(process.env.DATABASE_URL
    ,{

    }).then(console.log("database connected succesfully")).catch((err)=>{console.log(err)
      process.exit(1)
    }
);
   
}


module.exports = dbconnect;
// //import mongoose 
// requrie 


// url define 

// dbconnect variable  callback function 
// export