import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'; 
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';


const Productscreen = ({ history, match }) => {

    const [qty, setQty] = useState(1)

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { product, error, loading } = productDetails;

    useEffect(() => {
       dispatch(listProductDetails(match.params.id))

    }, [dispatch, match])

    const addToBasketHandler = () => {
        history.push(`/basket/${match.params.id}?qty=${qty}`)
    }

    return (
        <> 
            <Link to="/" className="btn btn-primary my-5">Back To Products</Link>

            { loading ? ( 
            <h2>Loading...</h2> 
            ) : error ? ( 
            <h3>{error}</h3> 
            ) : ( 
                    <Row>
                        <Col sm={6} md={6}>
                            <Image src={product.image} alt={product.name} fluid/>
                        </Col>
                        <Col sm={6} md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>{product.name}</h2>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <h4>Price: £{product.price}</h4>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p>{product.description}</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={6} md={3}>
                            <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                <Row>
                                    <Col>
                                            Price:
                                    </Col>
                                    <Col>
                                            <strong>£ {product.price}</strong>
                                    </Col>
                                </Row>
                                </ListGroup.Item>

                                <ListGroup.Item>
                                <Row>
                                    <Col>
                                            Status:
                                    </Col>
                                    <Col>
                                            <strong>{product.countInStock > 0 ? 'In Stock' : "Out of Stock"}</strong>
                                    </Col>
                                </Row>
                                </ListGroup.Item>

                                { product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Quantity
                                            </Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                   { 
                                                   [...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))
                                                    }
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )
                                }

                                <ListGroup.Item>
                                <Button onClick={addToBasketHandler} className="btn btn-block" type="button" disabled={product.countInStock < 1}>
                                        Add to Basket
                                </Button>
                                </ListGroup.Item>
                                
                            </ListGroup>
                            </Card>

                        </Col>
                    </Row>
                    )
            }
        </>
    )
}

export default Productscreen
