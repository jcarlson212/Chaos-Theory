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
                    <h1>Chaos Theory</h1>
                    <i>
                    In this section we will go over the main reasons Chaos Theory is worthwhile
                    </i>
                    <br/><br/>
                    <MathJax.Provider>
                        <div>
                            <p>We begin with the definition of a chaotic function <MathJax.Node inline formula={`f:[a,b] \\to [a,b]`} />; such
                             a function is said to be Chaotic if it is continuous and satisfies the following three conditions: </p>
                             <ol style={{textAlign:"left"}}>
                                 <li>
                                     Periodic points of <MathJax.Node inline formula={`f`} /> are dense in <MathJax.Node inline formula={`[a,b]`} /> - in other words,
                                     any <MathJax.Node inline formula={`x \\in [a,b]`} /> can be approximated by a point <MathJax.Node inline formula={`y \\in [a,b]`} /> s.t. 
                                     <MathJax.Node inline formula={`y`} /> is periodic <MathJax.Node inline formula={`(f^{m}(y) = y`} /> for some <MathJax.Node inline formula={`m\\in \\mathbf{N})`} />
                                 </li>
                                 <li>
                                     For any open sets <MathJax.Node inline formula={`U_{1}`} />, <MathJax.Node inline formula={`U_{2}`} /> there exists <MathJax.Node inline formula={`x \\in U_{1}`} />
                                     s.t. <MathJax.Node inline formula={`f^{m}(x) \\in U_{2}`} /> for some <MathJax.Node inline formula={`m \\in \\mathbf{N}`} />
                                 </li>
                                 <li>
                                     There exists some <MathJax.Node inline formula={`\\beta > 0`} /> s.t. for any <MathJax.Node inline formula={`x_{0} \\in [a,b]`} /> and neighborhood <MathJax.Node inline formula={`U`} />
                                     of <MathJax.Node inline formula={`x_{0}`} /> there exists some <MathJax.Node inline formula={`y_{0} \\in U`} /> s.t. <MathJax.Node inline formula={`|f(x_{0}) - f(y_{0})| > \\beta`} />.
                                 </li>
                             </ol>
                             <p>
                                 Roughly speaking, this means that the initial conditions are sensitive and arbitrarily small regions visit every other region. The initial conditions are sensitive in the sense that
                                 if you try to approximate an input value, that approximation is not guranteed to work nomatter how accurate it is.
                             </p>
                            <img src={chaos_100_simulations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <img src={chaos_1000_simulations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <img src={chaos_10000_simulations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <img src={chaos_line_graph_100_iterations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <img src={chaos_line_graph_1000_iterations} style={{maxWidth: "70%", border:"2px solid black"}} />
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default MotivationChaos;