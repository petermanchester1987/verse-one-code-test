import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {  Form, Row, Col, Image, Button, ListGroup } from 'react-bootstrap';

const Shippingscreen = ({ history }) => {

    const basket = useSelector(state => state.basket);
    const { basketItems } = basket;

    return (
        <div>
            <h3 className="my-3">Shipping Screen</h3>
            <Row>
                <Col md="8">
                <ListGroup variant="flush">
                            {basketItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={3}>
                                            <Image src={item.image} alt={item.name} fluid></Image>
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item.product}`}><h5>{item.name}</h5></Link>
                                        </Col>
                                        <Col md={2}>
                                            £{item.price}
                                        </Col>
                                        <Col md={2}>
                                                {item.qty}
                                        </Col>
                                        <Col md={2}>
                                           
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ) )}
                        </ListGroup>
                </Col>
            </Row>
            <Form className="my-5">
                <ListGroup>
                    <ListGroup.Item >
                        <p>If we were actually doing a checkout I'd make the user input the address here</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Make the address update the state</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>Even if the user is meant to be anonymous</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p>We have to know where to send the goods</p>
                    </ListGroup.Item>
                </ListGroup>
            </Form>

            <Button className="my-3">Proceed to Payment</Button>
        </div>
    )
}

export default Shippingscreen
