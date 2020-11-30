import { Jumbotron, Container } from 'react-bootstrap';
import './App.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import React from 'react';
import { Player, ControlBar } from 'video-react';
import MathJax from 'react-mathjax'
import lorenz from './lorenz.jpg';
import Lorenzsimulation from './Lorenzsimulation.mov';
import lorenz_x_vs_t from './lorenz_x_vs_t.jpg';
import lorenz_y_vs_t from './lorenz_y_vs_t.jpg';
import lorenz_z_vs_t from './lorenz_z_vs_t.jpg';

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
                            src={Lorenzsimulation}
                            muted={true}
                            autoPlay={true}
                            playsInline={true}

                        >
                            <ControlBar disableCompletely={true} />
                        </Player>

                        <img src={lorenz_x_vs_t} style={{maxWidth: "70%"}} />
                        <img src={lorenz_y_vs_t} style={{maxWidth: "70%"}} />
                        <img src={lorenz_z_vs_t} style={{maxWidth: "70%"}} />
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Lorenz;
  