const express = require("express");
const User = require("../model/user.model");
const routes = express.Router();
const createError = require("http_error");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const httpErrors = require("http-errors");
const { JWT_SECRET } = process.env;
// Register a new user
routes.post("/register", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw createError.BadRequest();
    const existUser = await User.findOne({ email: email });
    if (existUser) throw createError.Conflict(`${email} is already registered`);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email: email, password: hashedPassword });
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// Login and retrieve a user
routes.post("/login", async (req, res) => {
  
  try {
    const { email, password } = req.body;
    // find user by email
    const user1 = await User.findOne({ email });
    if (!user1) {
      // throw httpErrors.Conflict`${email} does not exist in our database, please consider signing up`; 
      return res.status(401).json({ message: "user does not exist" });

    }
    // compare password
    const ispasswordvalid = await bcrypt.compare(password, user1.password);
    // if password don't match
    if (!ispasswordvalid) {
       return res.status(401).json({ message: "invalid password" });
    }
    //generate jwt token
    const token = jwt.sign({ userId: user1._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({
      status:"200",
      type:"Bearer",
      token: token });
  } catch (errors) {
    console.error('server error',errors);
    
  }
});

// Get user by ID
routes.post("/refresh-token", async (req, res) => {
  res.send("refresh-token route");
});

// Delete user by ID
routes.delete("/logout", async (req, res) => {
  res.send("logout route");
});

module.exports = routes;
