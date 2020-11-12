import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Homescreen from './screens/Homescreen.js';


function App() {
  return (
    <Fragment>
      
      <Header />

      <Container>
        <main className="py-3">
          <Homescreen />
        </main>
       </Container>

      <Footer />
     
    </Fragment>
  );
}

export default App;
