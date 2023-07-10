const express=require('express')
require('dotenv').config();
const cors = require('cors');
require('./helpers/init_mongoDb');
const app=express();

app.use(express.json());
app.use(cors());
const studentroutes=require('./routes/api');

const lecturersroutes=require('./routes/lecturer.routes');

const authoroutes=require('./routes/auth.route');

app.use('/students',studentroutes);

app.use('/lecturers',lecturersroutes);

app.use('/auth',authoroutes);

//handling 404 errorss

app.use((req,res,next)=>{

    const err=new Error("Not found");

    err.status=404

    next(err)

})

//Error handler

app.use((err,req,res,next)=>{

    res.status(err.status || 500)

    res.send({

        error:{

            status:err.status || 500,

            message:err.message

 

        }

    })

})

 

app.listen(process.env.port||4000,function(){

    console.log('Now listening for requests on:http://localhost:4000');

});