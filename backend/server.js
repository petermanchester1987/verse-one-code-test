const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const productRoutes = require('./routes/productRoutes.js');


dotenv.config();

const app = express();

app.use(express.json());


app.use('/api/products', productRoutes);



//ONLY TO DEPLOY it


 
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..','/frontend/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
      });

} else {
    app.get('/', (req, res) => {
                res.send('API is running')
        } )
}



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


const PORT = process.env.PORT || 5000;



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));