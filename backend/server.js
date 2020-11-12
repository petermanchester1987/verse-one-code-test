const express = require('express');
const products = require('./data/data.json');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
        res.send('API is running')
} )

app.get('/api/products', (req, res) => {
        res.json(products)
} )


app.listen(PORT, console.log(`Server running on port ${PORT}`));