import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product.js';
import axios from 'axios';

const Homescreen = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('/api/products');

            setProducts(res.data)
        }

        getProducts()

    }, [])

    return (
        <>
            <h1 className="py-5">Robot Shop</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen
