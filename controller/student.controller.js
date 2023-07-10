const { model, default: mongoose } = require('mongoose');
const Student = require('../model/student');
const { createError } = require('http-errors');

module.exports = {
  getAllStudents: async (req, res, next) => {
    try {
      const students = await Student.find(); // Removed 'id' from the find query
      res.send(students);
    } catch (error) {
      console.log(error.message);
      next(error);
    }
  },

  addStudent: async (req, res, next) => { // Changed 'AddStudent' to 'addStudent'
    try {
      const student = new Student(req.body); // Changed 'new student' to 'new Student'
      const result = await student.save(); // Changed 'Student.save()' to 'student.save()'
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  getStudentById: async (req, res, next) => { // Changed 'getAllStudent' to 'getStudentById'
    const id = req.params.id;
    try {
      const student = await Student.findById(id); // Changed 'Student.findBy(id)' to 'Student.findById(id)'
      if (!student) {
        throw createError(404, 'Student does not exist'); // Changed 'create' to 'createError'
      }
      res.send(student);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid student id'));
        return;
      }
      next(error);
    }
  }
};
