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
    }, [dispatch, productId, qty])

    return (
        <div>
            Basket
        </div>
    )
}

export default Basketscreen;
