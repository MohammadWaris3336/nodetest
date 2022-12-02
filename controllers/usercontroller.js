const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const json = require("jsonwebtoken");

const signup = async(request, response)=>{
    try {
        const user = new usermodel(request.body);
        const checkemail = await usermodel.findOne({email:user.email});
        if(checkemail){
            response.send("Email Already Taken!")
        }
        else{
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
        response.send(user);
        }
    } catch (error) {
        response.status(400).send(error.message);
    }
}

const login = async(request, response)=>{
    try {
        const user = new usermodel(request.body);
        const token = json.sign({email:user.email}, "Token", {expiresIn: "24h"});
        console.log(token);
        const checkuser = await usermodel.findOne({email:user.email});
        if(checkuser){
        const userver = await bcrypt.compare(user.password, checkuser.password);
            if(userver){
                response.send("Login Successfully!"+ " " + checkuser+ " " + token);
            }
            else{
                response.send("Invalid Password!")
            }
        }
        else{
            response.send("Email not Found!")
        }
    } catch (error) {
        response.status(400).send(error.message);
    }
}




module.exports={
    signup,
    login
}