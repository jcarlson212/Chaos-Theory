import './App.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import React from 'react';
import MathJax from 'react-mathjax'
import discrete_iteration_stable from './discrete_iteration_stable.jpg';
import iterations_pt_2 from './iterations_pt_2.jpg';
import iterations_pt_3 from './iterations_pt_3.jpg';
import stable_iterations from './stable_iterations.jpg';

const tex = `f(x) = \\int_{-\\infty}^\\infty
\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
\\,d\\xi`

const dynamic_def = `x_{n+1} = f(x_{n})`

class Discrete extends React.Component {
    state = {
        
    }
    render = () => {
      return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Discrete Dynamical Systems</h1>
                    <i>
                    In this section we will go over the basics of Discrete Dynamical Systems
                    </i>
                    <br/><br/>
                    <MathJax.Provider>
                        <div>
                            <p>To start, we present the basic definition of a discrete dynamical system:</p>
                            <p>Definition 1. A discrete dynamical system is given by the equation <MathJax.Node formula={dynamic_def} />
                                where <MathJax.Node inline formula={`f: M \\rightarrow M`} /> for any arbitrary metric space <MathJax.Node inline formula={`M`} />
                                and <MathJax.Node inline formula={`n \\in \\mathbf{N}`} />
                            </p>
                            <p>For the remainder of our discussion, we will always assume <MathJax.Node inline formula={`f`} /> is a continuous function
                                and <MathJax.Node inline formula={`M = R^{n}`} />
                            </p>
                            <p>Proposition 2. Let <MathJax.Node inline formula={`f \\in C^{1}(R^{n})`} /> and have a fixed point <MathJax.Node inline formula={`x_{0}`} />.
                                Then <MathJax.Node inline formula={`x_0{}`} /> is a sink if <MathJax.Node inline formula={`|Df(x_{0})| < 1`} />, a source if <MathJax.Node inline formula={`|Df(x_{0})| > 1`} />,
                                and otherwise we cannot conclude anything.
                            </p>
                            <p>
                                Proof: This proposition is pretty trivial. Just choose <MathJax.Node inline formula={`\\delta > 0`} /> s.t. <MathJax.Node inline formula={`|Df(x) - Df(x_{0})| < \\epsilon`} /> for all <MathJax.Node inline formula={`x \\in B_{\\delta}(x_{0})`} />. Then
                                <MathJax.Node inline formula={`|f(x) - f(x_{0})| \\leq |x-x_{0}|\\cdot (|Df(x_{0})| + \\epsilon)`} />. If <MathJax.Node inline formula={`|Df(x_{0})| < 1`} />, then taking  
                                <MathJax.Node inline formula={`\\epsilon`} /> sufficiently small makes the RHS go to a value less than one - and if <MathJax.Node inline formula={`|Df(x_{0})| > 1`} /> we get 
                                <MathJax.Node inline formula={`|f(x) - f(x_{0})| > |Df(x_{0})|\\cdot |x-x_{0}|`} /> by just taking the convex line connecting <MathJax.Node inline formula={`x`} /> and <MathJax.Node inline formula={`x_{0}`} />.
                            </p>
                            <img src={discrete_iteration_stable} style={{maxWidth: "70%"}} />
                            <img src={iterations_pt_2} style={{maxWidth: "70%"}} />
                            <img src={iterations_pt_3} style={{maxWidth: "70%"}} />
                            <img src={stable_iterations} style={{maxWidth: "70%"}} />

                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Discrete;
  