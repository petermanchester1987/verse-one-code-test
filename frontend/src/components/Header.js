import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
           <Navbar bg="light" expand="lg" collapseOnSelect>
               <Container>
                    <Navbar.Brand href="/">Robot Shop</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/products"><i className="fas fa-robot"></i> Products</Nav.Link>
                            <Nav.Link href="/basket"><i className="fas fa-shopping-basket"></i> Basket</Nav.Link> 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
