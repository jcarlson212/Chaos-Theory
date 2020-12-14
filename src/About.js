import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Jumbotron, Container } from 'react-bootstrap';
import React from 'react';
import about_image from './images/about_image.jpg';

class About extends React.Component {
    state = {
    }

    render = () => {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <div style={{height:"700px"}}>
                        <h1>About</h1>
                        <img src={about_image} style={{maxWidth: "30%", border: "1px solid black", borderRadius: "10%"}}/>
                        <br/><br/>
                        <p>The authors of this website are Brian Carlson and Jason Carlson. If you have any questions feel free to email jcarlson212@gmail.com or bcarls11@asu.edu</p>
                        </div>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
  }
  
  export default About;