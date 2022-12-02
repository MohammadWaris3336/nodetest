const express = require("express");
const usercont = require("../controllers/usercontroller");

const app = express();

app.post('/signup', usercont.signup);

app.post('/login', usercont.login);



module.exports=app;