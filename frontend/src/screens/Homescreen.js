import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';

const Homescreen = () => {
    return (
        <>
            <h1>Products</h1>
            <Row>
                {products.map(product => (
                    <Col sm={12} md={6}>
                        <h3>{product.name}</h3>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Homescreen
