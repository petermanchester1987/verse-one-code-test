import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'; 
import Rating from '../components/Rating';
import axios from 'axios';


const Productscreen = ({ match }) => {

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(`/api/products/${match.params.id}`);

            setProduct(res.data)
        }

        getProduct()

    }, [ match ])

    return (
        <>
            <Link to="/" className="btn btn-primary my-5">Back To Products</Link>

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

                        <ListGroup.Item>
                           <Button className="btn btn-block" type="button" disabled={product.countInStock < 1}>
                                Add to Basket
                           </Button>
                        </ListGroup.Item>
                        
                    </ListGroup>
                    </Card>

                </Col>
            </Row>
        </>
    )
}

export default Productscreen
