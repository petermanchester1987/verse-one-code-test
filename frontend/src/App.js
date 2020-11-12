import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Homescreen from './screens/Homescreen.js';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        
        <Header />

        <Container>
          <main className="py-3">
            <Homescreen />
          </main>
        </Container>

        <Footer />
      
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
