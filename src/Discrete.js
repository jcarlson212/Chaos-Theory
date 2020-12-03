import './App.css';
import { Jumbotron, Container, Image } from 'react-bootstrap';
import React from 'react';
import MathJax from 'react-mathjax'
import discrete_iteration_stable from './discrete_iteration_stable.jpg';
import iterations_pt_2 from './iterations_pt_2.jpg';
import iterations_pt_3 from './iterations_pt_3.jpg';
import stable_iterations from './stable_iterations.jpg';
import shartoski from './shartoski.PNG';
import shark_ex_3_pt from './shark_ex_3_pt.jpg';
import shark_ex_diff_eqn from './shark_ex_diff_eqn.jpg';
import unstable_iterate from './unstable_iterate.jpg'

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
                            <p style={{textAlign: "left"}}>Definition. A discrete dynamical system is given by the equation <MathJax.Node formula={dynamic_def} />
                                where <MathJax.Node inline formula={`f: M \\rightarrow M`} /> for any arbitrary metric space <MathJax.Node inline formula={`M`} />
                                and <MathJax.Node inline formula={`n \\in \\mathbf{N}`} />
                            </p>
                            <p style={{textAlign: "left"}}>For the remainder of our discussion, we will always assume <MathJax.Node inline formula={`f`} /> is a continuous function
                                and <MathJax.Node inline formula={`M = R^{n}`} />
                            </p>
                            <p style={{textAlign: "left"}}>Proposition 2. Let <MathJax.Node inline formula={`f \\in C^{1}(\\mathbf{R})`} /> and have a fixed point <MathJax.Node inline formula={`x_{0}`} />.
                                Then <MathJax.Node inline formula={`x_0{}`} /> is a sink if <MathJax.Node inline formula={`|f'(x_{0})| < 1`} />, a source if <MathJax.Node inline formula={`|f'(x_{0})| > 1`} />,
                                and otherwise we cannot conclude anything.
                            </p>
                            <p style={{textAlign: "left"}}>
                                Proof: This proposition is pretty trivial. Just choose <MathJax.Node inline formula={`\\delta > 0`} /> s.t. <MathJax.Node inline formula={`|f'(x) - f'(x_{0})| < \\epsilon`} /> for all <MathJax.Node inline formula={`x \\in B_{\\delta}(x_{0})`} />. Then
                                we can assume <MathJax.Node inline formula={`f'(x)`} /> has the same sign as <MathJax.Node inline formula={`f'(x_{0})`} /> for <MathJax.Node inline formula={`x \\in B_{\\delta}(x_{0})`} />. Thus, for <MathJax.Node inline formula={`x \\in B_{\\delta}(x_{0})`} />
                                we have <MathJax.Node inline formula={`|x-x_{0}|\\cdot (|f'(x_{0})| - \\epsilon) \\leq |f(x) - f(x_{0})| \\leq |x-x_{0}|\\cdot (|f'(x_{0})| + \\epsilon) `} />. If <MathJax.Node inline formula={`|f'(x_{0})| > 1`} />, we get the
                                difference between the <MathJax.Node inline formula={`f`} /> values in absolute value is larger than the absolute difference in the <MathJax.Node inline formula={`x`} /> values. The opposite happens if <MathJax.Node inline formula={`|f'(x_{0})|<1`} />.
                                <br/>

                                When <MathJax.Node inline formula={`|f'(x_{0})| = 1`} />, things become too sensitive (the derivitive can immediately become larger or smaller in absolute value). So we can't really
                                conclude anything. The following examples illustrate this:
                            </p>
                            <img src={discrete_iteration_stable} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <img src={iterations_pt_2} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <img src={iterations_pt_3} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <p>Below we have an example of a stable point for <MathJax.Node inline formula={`f(x) = 1.5\\cdot \\sin(x-1)`} /> at <MathJax.Node inline formula={`x_{0} = -1.20675`} />. Since <MathJax.Node inline formula={`f'(x) = 1.5\\cdot \\cos(x-1)`} />, 
                            <MathJax.Node inline formula={`|f'(x_{0})| = |-.89| < 1`} /> - so by our proposition this should be a stable fixed point, as the following picture shows:
                             </p>
                             <br/><br/>
                            <img src={stable_iterations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <img src={unstable_iterate} style={{maxWidth: "70%", border: "2px solid black"}} />
                            <br/><br/>
                            <p>Sharkovskii Theorem. Let <MathJax.Node inline formula={`f: I \\to I`} /> continuous for some interval <MathJax.Node inline formula={`I \\subset R`} />. Consider
                            the following ordering of the natural numbers (which is a total order, but not well-ordered):
                            </p>
                            <br/><br/>
                            <img src={shartoski} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <p>If <MathJax.Node inline formula={`f`} /> has a periodic point of length m then <MathJax.Node inline formula={`f`} /> will have a periodic point of length n for all
                            <MathJax.Node inline formula={`n > m`} />.
                            </p>
                            <p>The following is an example of a function with a period of length three (<MathJax.Node inline formula={`f(x)=-\\frac{19}{30}x^{2}+\\frac{51}{10}-\\frac{8}{3}`} />):</p>
                            <br/><br/>
                            <img src={shark_ex_3_pt} style={{maxWidth: "70%", border:"2px solid black"}}/>
                            <br/>
                            <br/>
                            <p>Here is another way of visualizing it:</p>
                            <br/><br/>
                            <img src={shark_ex_diff_eqn} style={{maxWidth: "70%", border:"2px solid black"}}/>
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Discrete;
  