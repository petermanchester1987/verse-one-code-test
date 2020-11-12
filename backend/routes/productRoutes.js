const express = require('express');
const router = express.Router();
const products = require('../data/data.json');


// All Products get route
router.get('/', (req, res) => {
    if(products) {
        res.json(products)
    } else {
        res.status(404)
        throw new Error(`Product Not Found`)
    }
})

// Individual Product get route
router.get('/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
        if(product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error(`Product Not Found`)
        }
})

module.exports = router;
