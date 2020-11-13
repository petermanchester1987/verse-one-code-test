import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import { addToBasket } from '../actions/basketActions';

const Basketscreen = ({ match, location, history }) => {

    const productId = match.params.id;
    console.log(productId)

    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const basket = useSelector(state => state.basket);
    const { basketItems } = basket;

    useEffect(() => {
        if(productId) {
            dispatch(addToBasket(productId, qty))
        }
    }, [dispatch, productId, qty]);

    const removeFromBasketHandler = (id) => {
        console.log('remove');

    }

    return (
        <div>
            <Row>
                <Col md={8}>
                    <h1>Your Shopping Basket</h1>
                    {basketItems.length === 0 ? (
                    <div>
                        <Link to="/" className="btn btn-primary my-5">Back To Products</Link>
                        <h3>Your Shopping Basket is Empty...</h3> 
                    </div>
                    ) : (
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
                                                <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToBasket(item.product, Number(e.target.value)))}>
                                                   { 
                                                   [...Array(item.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))
                                                    }
                                                </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Button type="button" variant="danger" onClick={() => removeFromBasketHandler(item.product)}>
                                                <i className="fas fa-times"></i>
                                            </Button>
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            ) )}
                        </ListGroup>
                    )
                }
                </Col>
                <Col md={4}>

                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h4>Subtotal - { basketItems.reduce((a,item) => a + item.qty, 0 )} Items</h4>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>


                </Col>
                
            </Row>
        </div>
    )
}

export default Basketscreen;
