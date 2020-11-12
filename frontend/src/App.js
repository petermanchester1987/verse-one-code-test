import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <Fragment>
      
      <Header />

      <Container>
        <main className="py-3">
          <h1>Welcome To The Robot Shop</h1>
        </main>
       </Container>

      <Footer />
     
    </Fragment>
  );
}

export default App;
