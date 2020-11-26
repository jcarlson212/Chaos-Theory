import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Jumbotron, Container } from 'react-bootstrap';
import React from 'react';

class Home extends React.Component {
    state = {

    }

    render = () => {
      return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Welcome!</h1>
                    <p>
                    This is a website we made for our final project on Chaos Theory
                    </p>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Home;
  