import { Jumbotron, Container } from 'react-bootstrap';
import './App.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import { Player } from 'video-react';
import MathJax from 'react-mathjax'
import lorenz from './lorenz.jpg'

class Lorenz extends React.Component {
    state = {
        
    }

    render = () => {
      return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Lorenz</h1>
                    <i>
                    In this section we will go over the history of Lorenz and his equations
                    </i>
                    <br/><br/>
                    <img src={lorenz} style={{maxWidth: "70%"}} />
                    <MathJax.Provider>
                        <div>
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Lorenz;
  