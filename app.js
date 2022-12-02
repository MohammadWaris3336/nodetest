const express = require('express');
const mongoose = require('mongoose');
const userroute = require('./routes/userroute');
const prodroute = require('./routes/productroute');
const app = express();

app.use(express.json());


mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0.mkua9he.mongodb.net/node',
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(userroute);
app.use(prodroute);

app.listen(3000, ()=>{
    console.log("Server is listening on Port 3000");
})