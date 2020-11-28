import { Jumbotron, Container, Image } from 'react-bootstrap';
import React from 'react';
import MathJax from 'react-mathjax'
import './App.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import chaos_100_simulations from './chaos_100_simulations.jpg'
import chaos_1000_simulations from './chaos_1000_simulations.jpg'
import chaos_10000_simulations from './chaos_10000_simulations.jpg'
import chaos_line_graph_100_iterations from './chaos_line_graph_100_iterations.jpg'
import chaos_line_graph_1000_iterations from './chaos_line_graph_1000_iterations.jpg'

class MotivationChaos extends React.Component {
    state = {
        
    }

    render = () => {
      return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Motivations for Chaos Theory</h1>
                    <i>
                    In this section we will go over the main reasons Chaos Theory is worthwhile
                    </i>
                    <br/><br/>
                    <MathJax.Provider>
                        <div>
                            <img src={chaos_100_simulations} style={{maxWidth: "70%"}} />
                            <img src={chaos_1000_simulations} style={{maxWidth: "70%"}} />
                            <img src={chaos_10000_simulations} style={{maxWidth: "70%"}} />
                            <img src={chaos_line_graph_100_iterations} style={{maxWidth: "70%"}} />
                            <img src={chaos_line_graph_1000_iterations} style={{maxWidth: "70%"}} />
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default MotivationChaos;