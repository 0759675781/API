const express = require('express');
 const User = require('../model/user.model');
const routes = express.Router();
const createError=require('http-errors');
// Register a new user
routes.post('/register', async(req,res,next)=>{
try{
const{email,password}=req.body;
if(!email|| !password)throw createError.BadRequest();
const Exist= await User.findOne({email:email})
if(Exist)throw createError.Conflict(`${email} is already registered`)

const user= new User({email,password})
const savedUser= await user.save()
res.send(savedUser)
}catch(error){

console.log(error)
next (error)


}

});

// Login and retrieve a user
routes.post('/login', async(req,res)=>{
    res.send('login route')
});

// Get user by ID
routes.post('refresh-token', async(req,res)=>{
    res.send('refresh-token route')
});

// Delete user by ID
routes.delete('logout', async(req,res)=>{
    res.send('logout routes')
});

module.exports = routes;