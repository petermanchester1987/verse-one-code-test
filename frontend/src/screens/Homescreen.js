import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product.js';
import products from '../products';

const Homescreen = () => {
    return (
        <>
            <h1>Products</h1>
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