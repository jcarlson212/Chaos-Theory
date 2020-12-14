import { Jumbotron, Container, Image } from 'react-bootstrap';
import React from 'react';
import MathJax from 'react-mathjax'
import './App.css';
import chaos_100_simulations from './images/chaos_100_simulations.jpg'
import chaos_1000_simulations from './images/chaos_1000_simulations.jpg'
import chaos_10000_simulations from './images/chaos_10000_simulations.jpg'
import chaos_line_graph_100_iterations from './images/chaos_line_graph_100_iterations.jpg'
import chaos_line_graph_1000_iterations from './images/chaos_line_graph_1000_iterations.jpg'
import new_double_map from './images/new_double_map.jpg'
import new_tent_map_chaos from './images/new_tent_map_chaos.jpg'
import doubling_map_0003 from './images/doubling_map_0003.jpg';

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
                                     of <MathJax.Node inline formula={`x_{0}`} /> there exists some <MathJax.Node inline formula={`y_{0} \\in U`} /> s.t. for some <MathJax.Node inline formula={`n_{0}`} /> we have <MathJax.Node inline formula={`|f^{n_{0}}(x_{0}) - f^{n_{0}}(y_{0})| > \\beta`} />.
                                 </li>
                             </ol>
                             <p>
                                 Roughly speaking, this means that the initial conditions are sensitive and arbitrarily small regions visit every other region. The initial conditions are sensitive in the sense that
                                 if you try to approximate an input value, that approximation is not guranteed to work nomatter how accurate it is.
                             </p>
                             <br/>
                             <p>
                             Notice here that below is just the discrete logistic map. What looks like a nice differential equation actually is chaotic under given parameters. In this case, the parameter which represents growth is 4. On the unit interval, this discrete differential equation is chaotic and simulated below for various iteration:
                             </p>
                            <img src={chaos_100_simulations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <img src={chaos_1000_simulations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <img src={chaos_10000_simulations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <p>
                            Here is another cobweb plot which was demonstrated previously when we discussed fixed points. Notice that the differential equation ends up going everywhere in the domain of the function and after 1,000 iterations fills almost the entire plot:

                            </p>
                            <img src={chaos_line_graph_100_iterations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <img src={chaos_line_graph_1000_iterations} style={{maxWidth: "70%", border:"2px solid black"}} />
                            <br/><br/>
                            <p>
                            Here we have the doubling map and the tent map. These are both very simple discrete differential equations which are very chaotic, and this is demonstrated below. Again, we have another cobweb map for the doubling map which shows how chaotic it is. Something to consider is that numerical error is a huge issue with these plots. At first, when simulating the cobweb plot for the doubling map it ended up producing an unexpected figure. Well, since chaotic systems are so sensitive to initial conditions, numerical error can greatly disturb what the plot should look like. This caused us to have to use far greater precision than normal to get the desired plot!

                            </p>
                            <img src={new_double_map} style={{maxWidth: "70%", border: "2px solid black"}} />
                            <br/><br/>
                            <img src={new_tent_map_chaos} style={{maxWidth: "70%", border: "2px solid black"}} />
                            <br/><br/>
                            <img src={doubling_map_0003} style={{maxWidth: "70%", border: "2px solid black"}} />
                            <br/><br/>

                            <p>
                                Lets now consider an interesting map: the shift map. Define the shift map <MathJax.Node inline formula={`T: \\{0,1 \\}^{\\mathbf{N}} \\to \\{0,1 \\}^{\\mathbf{N}}`} /> is given by <MathJax.Node inline formula={`T((x_{1}, x_{2},\\cdots)) = (x_{2}, x_{3}, \\cdots)`} />.
                                To make <MathJax.Node inline formula={`\\{0,1 \\}^{\\mathbf{N}}`} /> a metric space, we will define a metric <MathJax.Node inline formula={`d: \\{0,1 \\}^{\\mathbf{N}} \\times \\{0,1 \\}^{\\mathbf{N}} \\to \\mathbf{R}^{\\geq 0}`} /> by <MathJax.Node inline formula={`d((x_{1}, \\cdots), (y_{1}, \\cdots)) = \\sum_{i=1}^{\\infty} \\frac{1}{2^{i}}|x_{i} - y_{i}|`} />.
                                The fact that this is a metric space is trivial and the fact that the shift map is continuous is a standard exercise. More interestingly, we show that <MathJax.Node inline formula={`T`} /> yeilds a chaotic differential equation:<br/><br/>
                                <ol style={{textAlign: "left"}}>
                                    <li>
                                        We first show periodic orbits are dense. To see this, let <MathJax.Node inline formula={`x=(x_{1}, x_{2}, \\cdots) \\in \\{0,1 \\}^{\\mathbf{N}}`} />. Let <MathJax.Node inline formula={`n_{0} \\in \\mathbf{N}`} /> s.t. <MathJax.Node inline formula={`\\sum_{i = n_{0}}^{\\infty} \\frac{1}{2^{i}} < \\epsilon`} />. Define <MathJax.Node inline formula={`y=(x_{1},\\cdots x_{n_{0}}, x_{1},\\cdots x_{n_{0}}, \\cdots)`} />. 
                                        Observe <MathJax.Node inline formula={`d(x, y) < \\epsilon`} /> and <MathJax.Node inline formula={`T^{n_{0}}(y) = y`} />.
                                    </li>
                                    <li>
                                        Let <MathJax.Node inline formula={`U,V`} /> be open in <MathJax.Node inline formula={`\\{0,1 \\}^{\\mathbf{N}}`} /> with <MathJax.Node inline formula={'x \\in U'}/> and <MathJax.Node inline formula={`y \\in V`} />. Let <MathJax.Node inline formula={`n_{0} \\in \\mathbf{N}`} /> as before. Then define 
                                        <MathJax.Node inline formula={`z=(x_{1}, x_{2}, \\cdots, x_{n_{0}}, y_{1}, y_{2}, \\cdots)`} />. Then <MathJax.Node inline formula={`z \\in U`} /> and <MathJax.Node inline formula={`T^{n_{0}}(z) \\in V`} />.
                                    </li>
                                    <li>
                                        We now show sensitivity of initial conditions with sensitivity constant <MathJax.Node inline formula={`\\frac{1}{2}`} />. Let <MathJax.Node inline formula={`x \\in \\{0,1 \\}^{\\mathbf{N}}`} /> and define <MathJax.Node inline formula={`y = (x_{1}, x_{2}, \\cdots, x_{n_{0}}, 1-x_{n_{0}+1},1-x_{n_{0}+2}, \\cdots)`} />. Then <MathJax.Node inline formula={`|T^{n_{0}}(x)-T^{n_{0}}(y)| = 1 > \\frac{1}{2}`} /> yet <MathJax.Node inline formula={`d(x,y) < \\epsilon`} /> (for sufficiently
                                        large <MathJax.Node inline formula={`n_{0}`} />.
                                        )
                                    </li>
                                </ol>
                                This completes the proof. I left out some quantifiers and definitions for <MathJax.Node inline formula={`\\epsilon > 0`} /> and <MathJax.Node inline formula={`n_{0}`} />, but it should be clear where they go (and if not, it would probably make a good exercise in finding where they go).
                            </p>
                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default MotivationChaos;