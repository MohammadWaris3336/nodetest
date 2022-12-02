const prodmodel = require('../models/productmodel');
const jwt = require("jsonwebtoken");


const addProd = async(request,response)=>{
    try {
        const product = new prodmodel(request.body);
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(400).send(error.message);
    }
}

const userallProducts = async(request,response)=>{
    try {
        // const userr = request.headers.authorization;
        const product = await prodmodel.find(request.params);
        response.send(product);
    } catch (error) {
        response.send(error.message);
    }
    // try {
             
    //         var authorization = request.headers.authorization.split(' ')[1];
    //             const decoded = jwt.decode(authorization, "Token");
    //             console.log(decoded);
    //             const userId = decoded.id  
    //             console.log(userId);
           
                
    //     const userid = request.userId;
    //      console.log(userid);
    //         // Fetch the user by id 
    //       const product =  await prodmodel.findOne({userid})
    //         if(product){
    //             response.send(product);
    //         }
    //         else{
    //             response.send("usernot found")
    //         }
            
        
    // }
    //  catch (error) {
    //     response.send(error.message);
    // }
    
}

const allProducts = async(request,response)=>{
    try {
        const product = await prodmodel.find({});
        response.send(product);
    } catch (error) {
        response.send(error.message);
    }
    
}

const prodby = async(request,response)=>{
    try {
        const product = await prodmodel.findOne(request.params);
        response.send(product);
    } catch (error) {
        response.send(error.message);
    }
}


const produpdate = async(request,response)=>{
    try {
        const product = await prodmodel.findByIdAndUpdate(request.params, {$set: request.body});
        await product.save();
        response.send(product);

    } catch (error) {
        response.status(400).send(error.message);
    }
}

const proddelete = async(request, response)=>{
    try {
        const product = await prodmodel.findByIdAndRemove(request.params);
        response.send("User Deleted !");
     } catch (error) {
        response.status(400).send(error.mssage);
    }
}

module.exports={
    addProd,
    allProducts,
    prodby,
    produpdate,
    proddelete,
    userallProducts

}