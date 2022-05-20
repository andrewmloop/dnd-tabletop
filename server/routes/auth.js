import express from "express";
import User from "../models/User.js";

const authRouter = express.Router();

authRouter.post('/register', (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    email: req.body.email,
    password: req.body.password
  };

  User.create(newUser, (err, result) => {
    if (err) {
      res.status(400).json({
        message: "Bad request"
      });
    }
    res.status(200).json({
      message: "User created",
      data: result
    })
  })
})

export default authRouter;