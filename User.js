// const express = require('express');
// const router = express.Router();
// const User = require('./Api\mongo.js'); // Assuming the schema is in a 'models' directory

// // Example route to save a user
// router.post('/saveUser', async (req, res) => {
//   try {
//     const { Username, LastName, Email, password } = req.body;
//     const newUser = new User({ Username, LastName, Email, password});
//     await newUser.save();
//     res.status(201).json({ message: 'User saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// module.exports = router;


const mongoose = require('mongoose');


const newShima = new mongoose.Schema({
    // Username:{
    //     type:String,
    //     required:true
    // },
    // LastName:{
    //     type:String,
    //     required:true
    // },  
    // Email:{
    //     type:String,
    //     required:true
    // },
    // password:{
    //     type:String,
    //     required:true
    // }

    Username : String,
    LastName: String,
    Email : String,
    password: String



})

const collection = mongoose.model("collection", newShima)

module.exports=collection;