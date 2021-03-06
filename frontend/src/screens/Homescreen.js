import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import Product from '../components/Product.js';
import { listProducts } from '../actions/productActions';

const Homescreen = ({ match }) => {

    const keyword = match.params.keyword; 

   const dispatch = useDispatch();

   const productList = useSelector( state => state.productList);
   const { loading, error, products } = productList;
    
    useEffect(() => {
       dispatch(listProducts(keyword))
    }, [dispatch, keyword]);

    return (
        <>
            <h1 className="py-5"> <i className="fas fa-robot"></i> Robot Shop</h1>
            { loading ? ( 
            <h2>Loading...</h2> 
            ) : error ? ( 
            <h3>{error}</h3> 
            ) : ( 
            <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                    <Product product={product} />
                </Col>
            ))}
            </Row>
            )
            }
        </>
    )
}

export default Homescreen
