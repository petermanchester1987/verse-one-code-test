const express = require('express');
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes.js');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

//just a test to see if the api was running
// app.get('/', (req, res) => {
//         res.send('API is running')
// } )


app.use('/api/products', productRoutes);


//the custom error handling middleware I made as an example

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
})

app.use((err, req, res, next) => {
    // if the error is 200 then setting it as a server error, otherwise we see the actual error code whatever it is.
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    // this will only show the error in development mode
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
        })

})



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));