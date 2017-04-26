const express = require('express');
const router = express.Router();

const Product = require('../models/index').Product;

// Questions#index

router.get('/', function (req, res){
  Product
    .findAll()
    .then(function (products){
      res.render('products/index',
    {products: products});
  });
})

// Questions#show

router.get('/:id', function(req, res){
  const id = req.params.id;
  Product
    .findById(id)
    .then(function (product){
      res.render('products/show', {product: product})
    })
})

// Questions#new

router.get('/new', function(req, res){
    res.render('products/new')
})


module.exports = router;
