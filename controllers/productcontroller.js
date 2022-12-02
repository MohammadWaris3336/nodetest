const prodmodel = require('../models/productmodel');


const addProd = async(request,response)=>{
    try {
        const product = new prodmodel(request.body);
        await product.save();
        response.send(product);
    } catch (error) {
        response.status(400).send(error.message);
    }
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
    proddelete

}