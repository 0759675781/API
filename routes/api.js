const express = require('express');
const Student = require('../model/student');
const routes=express.Router();


// get all students
routes.get('/', async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await Student.findById(id);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// // get a specific student
routes.get('/get/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const student = await Student.findById(id);
    res.send(student);
  } catch (error) {
    console.log(error.message);
  }
});

// // update student
routes.patch('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const update = req.body;
    const result = await Student.findByIdAndUpdate(id, update);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});

// // delete a student
routes.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Student.findByIdAndRemove(id);
    res.send(result);
  } catch (error) {
    console.log(error.message);
  }
});
routes.post('/', async (req, res, next) => {
    try {
      const student = new Student(req.body);
      const result = await student.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
    }
  });
module.exports = routes;
