const db= require("../models");
const tutorial=db.tutorials;

const Op =db.Sequelize.op;

const getPagination= (page, size)=>{
const limit =size ? + size:3;
const offset =page ? page * limit:0;
 
return{limit,offset};
}
const getPaginationData =(data, page, limit, )=>{
const{countTotalItems, rows: tutorials} =data;
const currentPage=page? +page:0;
const totalPages=math.cell(totalsItmes/limit);

return (totalsItmes, tutorials,totalPages, currentPage);

};
// create and save a new tutorial 
exports.create =(req, res)=>{
// validate the request 
if (!res.body .title){
    res.status(400).send({
        message:"title cannot be empty!"
    })
    return;
}
// create tutorial 
const tutorial= {
title:req.body.title,
description:req.body.description,
published:req.body.published? req.body.published:false
}
// save tutorial in thedatabase 
Tutorial.create(tutorial)
.them (data=>{
    res.send(data);
})
.catch(err=>{
res.staus(500).send({
message:
err.message || "an error occured while creating the tutorial"

})

})

}
   // retrieve al tutorial from the database 
exports.findAll = req, res=>{
const{page, size, title}= req. query;
var condition= title?  {title:{[Op.like]: `%${title}%`}} :null;

const {limit, offset}= getPagination(page, size);
Tutorial.findAndCountAll({where:condition, limit, offset})
.then(data=>{
const response = getPagination(data, page, limit)
res.send(responce);


})
.catch(err=>{
res. status(500).send({
message:
err.message || "An error occured while retrieving tutorials"
})

})




}


