const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');
const jwtSecret = "0f004539fa6503e6656ff9785ca9dfc32b3eea276d6bac41c999e6dfe"

router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("password",'Incorrect Password').isLength({ min: 10 }),
    body("name").isLength({ min: 10 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //adding validation to the login 
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }
    const salt = await bcrypt.genSalt(10);
    let securePassword = await bcrypt.hash(req.body.password,salt);
    try {
      await User.create({
        name: req.body.name,
        password: securePassword,
        email: req.body.email,
        location: req.body.location,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
    "/loginuser",
    [
        body("email").isEmail(),
        body("password",'Incorrect Password').isLength({ min: 10 }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        //adding validation to the login 
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()});
        }
        let email = req.body.email;

      try {
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors : "Try logging with correct credentials"});
        }
        const pwdCompare = await bcrypt.compare(req.body.password,userData.password);
        if(!pwdCompare){
            return res.status(400).json({errors : "Try logging with correct credentials"});
        }
        const data = {
            user : {
                id : userData.id
            }
        }
        const authToken = jwt.sign(data,jwtSecret);
        return res.json({success : true,authToken : authToken,name : userData.name});

        
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
    }
  );
module.exports = router;
