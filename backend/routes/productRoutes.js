const express = require('express');
const router = express.Router();
//const expressAsyncHandler = require('express-async-handler')

// this would be an easy way to handle errors in the server
// or we could use try/catch blocks (but we cant when we arent running async operations)
const products = require('../data/data.json');


// All Products get route
router.get('/', (req, res) => {
      // in a real scenario, this would be an asynchronous call the database
    // so there should really be an async up there before the callback function
    //const products = await products.find(); finding it in the database

    const keyword = req.query.keyword;


    if(keyword.length < 1) {
        res.json(products)
    } else if (keyword.length > 1){
    const userQueryRegEx = new RegExp('.*' + keyword + '.*','gi');
    const filteredArray = products.filter((item) => {
        return  userQueryRegEx.test(item.name) || userQueryRegEx.test(item.description) || userQueryRegEx.test(item.brand)
    })
        res.json(filteredArray)
    } else if (error) {
        res.status(404)
        throw new Error(`Product Not Found`)
    }

})




// Individual Product get route
router.get('/:id', (req, res) => {

     // This again would be an asynchronous call the database
    // so there should really be an async up there before the callback function
    // you could do some kind of findById method in the database to get the right product


    const product = products.find((p) => p._id === req.params.id)
        if(product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error(`Product Not Found`)
        }
})



module.exports = router;
