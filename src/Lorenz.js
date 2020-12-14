import { Jumbotron, Container } from 'react-bootstrap';
import './App.css';
import React from 'react';
import { Player, ControlBar } from 'video-react';
import MathJax from 'react-mathjax'
import lorenz from './images/lorenz.jpg';
import Lorenzsimulation from './Lorenzsimulation.mov';
import lorenz_x_vs_t from './images/lorenz_x_vs_t.jpg';
import lorenz_y_vs_t from './images/lorenz_y_vs_t.jpg';
import lorenz_z_vs_t from './images/lorenz_z_vs_t.jpg';


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
                    <br/><br/>
                    <p>
                    The Lorenz system served its original purpose to model certain aspects of weather. Specifically, many mathematicians at the time were trying to 
                    model a single fluid particle being heated from below and cooled from above in order to make predictions on the weather. These models 
                    were very complicated and often involved partial differential equations. Lorenz decided to simplify these models by just using a system of 
                    nonlinear ordinary differential equations. The main interest in this model arises from the dynamics of the model itself, and not much its 
                    effect of predicting the weather. So far in our class we have only covered “nice” differential equations which do not exhibit any chaos and can 
                    actually be proved not to be chaotic by the Poincare Bendixson theorem. This model motivated many to begin formulating chaos theory and its 
                    importance cannot be understated.
                    </p>
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
                        <br/><br/>
                        <img src={lorenz_x_vs_t} style={{maxWidth: "70%", border:"2px solid black"}} />
                        <br/><br/>
                        <img src={lorenz_y_vs_t} style={{maxWidth: "70%", border:"2px solid black"}} />
                        <br/><br/>
                        <img src={lorenz_z_vs_t} style={{maxWidth: "70%", border:"2px solid black"}} />
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Lorenz;
  