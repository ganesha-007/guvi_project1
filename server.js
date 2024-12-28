// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const collection = require('./mongo')

// const app = express();
// const PORT = 5000; // or any other port you prefer

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb+srv://nandunabekoon:Nandun123@cluster0.teuadjj.mongodb.net/?retryWrites=true&w=majority',
//  { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected');
//   })
//   .catch((err) => {
//     console.log('MongoDB connection failed', err);
//   });

// // Define routes
// // // Create this file for defining routes
// //app.use('/api', routes);

// app.get('/signin',(req,res)=>{
//   res.send("hellow world")
// })

// app.post('/signin',async(req,res)=>{
//   const {Username,LastName,Email,Password} = req.body;
  
//   const newCollection = new collection({
//     Username : Username,
//     LastName : LastName,
//     Email : Email,
//     password : Password
//   })
  

//   try{

//     const saveUser = await newCollection.save();
//     if(saveUser){
//       res.status(201).send("Data is saved on database")
//     }
    
//   }catch(error){
//     console.log(error)
//     res.send("failed")
//   }
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



//userName -- nandunabekoon

// password --- Nandun123

//mongodb+srv://nandunabekoon:Nandun123@cluster0.teuadjj.mongodb.net/?retryWrites=true&w=majority

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const collection = require('./models/User')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect ("mongodb+srv://nandunabeykoon:nandun123@cluster0.k4kjmzr.mongodb.net/?retryWrites=true&w=majority")

app.post("/signin", (req, res) => {
    collection.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server is running")
})