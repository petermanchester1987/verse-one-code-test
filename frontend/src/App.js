import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Homescreen from './screens/Homescreen.js';
import Productscreen from './screens/Productscreen.js';


function App() {
  return (
    <BrowserRouter>
      <Fragment>
        
        <Header />
        <main className="py-3">
          <Container>
          
              <Route path="/" exact component={Homescreen} />
              <Route path="/product/:id" component={Productscreen} />
            
          </Container>
        </main>
        <Footer />
      
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
