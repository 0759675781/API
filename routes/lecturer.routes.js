const express=require('express');
const routes=express.Router();
const lecturerroute =express.Router();
routes.get('/',(req,res,next)=>{
    res.send({type:'Get Request'});
});
routes.post('/',(req,res)=>{
    res.send({type:'post Request'})
});
routes.put('/:id',(req,res)=>{
    res.send({type:'update Request'})
});
routes.delete('/:id',(req,res)=>{
    res.send({type:'delete Request'})
});
module.exports= lecturerroute