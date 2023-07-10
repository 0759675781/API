const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const studentSchema =new Schema({
    firstname:{
        type: String,
        required:[true, 'firstname is required']  
    },
    lastname:{
        type: String,
        required:[true, 'lastname is required']  
    },
    
    gender:{
        type: String  
    },
      
})
const Student =mongoose.model('student',studentSchema);//(creating a model that is going to represent our collection in db)
module.exports =Student; //(here we are exporting this file so that we can use it in otehr files)