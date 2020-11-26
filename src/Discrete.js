import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import React from 'react';

class Discrete extends React.Component {
    state = {
        
    }

    render = () => {
      return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Discrete Dynamical Systems</h1>
                    <p>
                    This is a website we made for our final project on Chaos Theory
                    </p>
                    <Image src="" fluid />
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Discrete;
  