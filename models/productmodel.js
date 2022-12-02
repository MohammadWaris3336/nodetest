const mongoose= require('mongoose');
const prodSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }
});

const product = mongoose.model('product', prodSchema);
module.exports = product;