import React from 'react';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Searchbox from './Searchbox.js';



const Header = () => {
    return (
        <header>
           <Navbar bg="light" expand="lg" collapseOnSelect>
               <Container>
                   <LinkContainer to="/">
                        <Navbar.Brand><i className="fas fa-robot"></i> Robot Shop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Route render={({ history }) => <Searchbox history={history} />} />

                        <Nav className="ml-auto">

                        <LinkContainer to="/">
                            <Nav.Link><i className="fas fa-robot"></i> Products</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/basket">
                            <Nav.Link><i className="fas fa-shopping-basket"></i> Basket</Nav.Link> 
                        </LinkContainer>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
