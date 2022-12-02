const express = require('express');
const app = express();
const prodcont = require('../controllers/productcontroller');
const userAuth = require('../middleware/userAuth');

app.post('/products/add-product',userAuth, prodcont.addProd);

app.get('/products/all',userAuth, prodcont.allProducts);

app.get('/user/product/:userId',userAuth, prodcont.userallProducts);

app.get('/products/:_id',userAuth, prodcont.prodby);

app.put('/product/update/:_id',userAuth, prodcont.produpdate);

app.delete('/products/delete/:_id', userAuth, prodcont.proddelete);


module.exports = app;