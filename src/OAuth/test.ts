const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql');
const jwt = require("jsonwebtoken");
const { request } = require('express');
const { rmSync } = require('fs');
const port = 4000

app.use(cors())
app.use(bodyParser())
app.use(express.json());

const connection = mysql.createConnection({
  host: '54.169.69.87',
  user: 'rtd',
  password: 'Tiny722$',
  database: 'pe8db'
});
connection.connect()

// importing user context
const User = require("./model/user");

// Register
app.post("/register", (req, res) => {
// our register logic goes here...
});

// Login
app.post("/login", (req, res) => {
// our login logic goes here
});



// axios.post('/signin',(req,res)=>{
//   const user = {username:"tsatsaa",password:"1234"}
//   if(!req.body.username) {
//     res.status(400).send('enter username')
//     return
//   }
//   if(!req.body.password) {
//     res.status(400).send('enter password')
//     return
//   }
//   if(req.body.username) {
//     res.status(400).send('enter password')
//   }

// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})