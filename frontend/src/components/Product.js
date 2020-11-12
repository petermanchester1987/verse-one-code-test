import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating.js'

const Product = ({ product }) => {
    return (
        <Card style={{maxWidth: '300px', height: '480px'}} className="my-3 p-3 rounded productcard">
            <Link to={`/product/${product._id}`}>
                <Card.Img style={{maxWidth: '250px', maxHeight: '250px'}} src={product.image} className="img-fluid card-img-top" variant="top" />
            </Link>

            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as="h3"><strong>{product.name}</strong></Card.Title>
            </Link>

            <Card.Text as="div">
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Text>

            <Card.Text as="h3">
                    £{product.price} 
            </Card.Text>


            </Card.Body>
        </Card>
    )
}

export default Product
