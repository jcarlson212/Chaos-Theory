import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { Jumbotron, Container } from 'react-bootstrap';
import MathJax from 'react-mathjax'
import React from 'react';
import brianwissmanstrangeattractors from './brian-wissman-strange-attractors.jpg';
import henon_3 from './henon_3.jpg';
import lorenz_sys from './lorenz_sys.jpg';
import rossier_sys from './rossier_sys.jpg';
import edges from './edges.png';
import IslamicFractalStarInterlacedfull from './Islamic-Fractal-Star-Interlaced-full.jpg';
import Triadic_Cantor_Set from './Triadic_Cantor_Set.png';
import mandelbrot from './mandelbrot.gif'
class Applications extends React.Component {
    state = {
        
    }

    render = () => {
      return (
        <div>
            <Jumbotron fluid>
                <Container>
                    <h1>Hausdorff Dimension and Strange Attractors</h1>
                    <i>
                    In this section we will talk about what it means to be a fractal and how it relates to Strange Attractors
                    </i><br/>
                    <img src={brianwissmanstrangeattractors} style={{maxWidth:"75%", maxHeight:"300px", border:"2px solid black"}}/>
                    <br/><br/>
                    <MathJax.Provider>
                        <div>
                            <p style={{textAlign:"left"}}>To start, we define the Hausdorff dimension of an open nonempty subspace of <MathJax.Node inline formula={`R^{n}`} /> for <MathJax.Node inline formula={`n \\geq 2`} /> :</p>
                            <p style={{textAlign:"left"}}>
                                For any nonempty open set <MathJax.Node inline formula={`U \\subset R^{n}`} /> we define the diameter
                                of <MathJax.Node inline formula={`U`} /> to be <MathJax.Node inline formula={`d(U) = \\sup_{x \\in U,\\text{ } y \\in U} |x - y|`} />. For any open cover <MathJax.Node inline formula={`\\{V_{i}\\}_{i \\in I}`} />
                                of <MathJax.Node inline formula={`U`} />, we say it is a <MathJax.Node inline formula={`\\delta`} />-cover if it is a countable cover and if the diameter of every set is less than <MathJax.Node inline formula={`\\delta`} />.
                                Define,
                                <MathJax.Node formula={`\\mu^{\\alpha}(U) = \\lim_{\\delta \\to 0} \\inf{\\{\\sum_{j}d(V_{j})\\text{ }|\\text{ such that } \\{V_{j}\\} \\text{ is a delta cover of U} \\}}`} />
                                This defines a premeasure on all open sets <MathJax.Node inline formula={`U`} /> in the subspace topology of <MathJax.Node inline formula={`M`} />. Hence, we get a borel <MathJax.Node inline formula={`\\sigma`} />-algebra 
                                on the set of all subsets that are "nice" (<MathJax.Node inline formula={`\\mu^{\\alpha}(A) = \\mu^{\\alpha}(A-B) + \\mu^{\\alpha}(B-A)`} /> for all <MathJax.Node inline formula={`A`} /> implies <MathJax.Node inline formula={`B`} /> is in our sigma algebra)
                                by Caratheodory's Theorem, with <MathJax.Node inline formula={`\\mu^{\\alpha}`} /> a measure on this sigma algebra.
                                The Hausdorff dimension of <MathJax.Node inline formula={`U`} /> is defined as <MathJax.Node inline formula={`\\dim_{H}(U) = \\inf \\{\\alpha\\text{ }|\\text{ } \\mu^{\\alpha}(U) = 0\\} = \\sup \\{\\alpha\\text{ }|\\text{ } \\mu^{\\alpha}(U) = \\infty\\}`} />.
                            </p>
                            <p style={{textAlign:"left"}}>
                                Proposition: <MathJax.Node inline formula={`dim_{H}(U)`} /> makes sense (the equality in particular)<br/><br/>
                                Proof: Consider <MathJax.Node inline formula={`\\mu^{\\alpha}(U) < \\infty`} /> for some <MathJax.Node inline formula={`\\alpha`} />. Let <MathJax.Node inline formula={`\\beta > \\alpha`} />. Then for <MathJax.Node inline formula={`\\delta > 0\\text{, } \\mu_{\\delta}^{\\beta}(U) = \\lim_{\\delta \\to 0}\\inf\\{\\sum_{j} d(V_{j})^{\\beta}\\text{ }|\\text{ }\\{V_{j}\\}\\text{ a delta cover of U} \\} \\leq \\lim_{\\delta\\to 0}\\delta^{\\beta - \\alpha}\\inf\\{\\sum_{j} d(V_{j})^{\\beta}\\text{ }|\\text{ }\\{V_{j}\\}\\text{ a delta cover of U} \\} = 0\\text{ }`} /> 
                                since <MathJax.Node inline formula={`\\delta^{\\beta - \\alpha} \\to 0 \\text{ as } \\delta \\to 0`} /> and the other part of the inf is finite. For <MathJax.Node inline formula={`\\beta < \\alpha`} />, we get the same thing but a factor of <MathJax.Node inline formula={`\\delta^{\\beta - \\alpha}`} />, which goes to infinity as <MathJax.Node inline formula={`\\delta \\to 0`} />. 
                                So what remains is to prove that such a value exists. Since <MathJax.Node inline formula={`U`} /> open and nonempty (and <MathJax.Node inline formula={`n \\geq 2`} /> ), it follows that <MathJax.Node inline formula={'U'} /> contains infinitely many points. 
                                So <MathJax.Node inline formula={`\\mu^{0}(U) = \\infty`} />. Also, <MathJax.Node inline formula={`\\mu^{n+1}(U) = 0`} /> since <MathJax.Node inline formula={`U`} /> is an open subset of n-dimensional Euclidean space and the ball in such a space has finite Hausdorff dimension. So the sup and inf are defined and equal.
                            </p>

                            <p style={{textAlign:"left"}}>
                                Proposition: <MathJax.Node inline formula={`\\dim_{H}(B_{1}(0)) = n`} /> <br/><br/>
                                Proof: <MathJax.Node formula={`\\mu^{n}(B_{1}(0)) = \\lim_{\\delta\\to 0}\\inf\\{\\sum_{j} d(V_{j})^{n}\\text{ }|\\text{ }\\{V_{j}\\} \\text{ a delta cover of U} \\} = d(B_{1}(0))^{n} < \\infty`} /> Since only one such value can be finite (from above), we are done. 
                            </p>
                            <p style={{textAlign:"left"}}>
                                Notice that the Hausdorff dimension of a space is really just a measure of how rough the space is relative to the ambient space - for if there are too many "approximate hyperplanes" in the subspace, then the hasudorff dimension will be lowered, averaging the "higher dimensional" parts with the "lower dimensional" parts. To give you an idea of this, consider the following sequence of shapes:
                                <br/><br/>
                            </p>
                                <img src={edges} style={{maxWidth: "70%", border:"2px solid black"}}/>
                                <br/><br/>
                            <p style={{textAlign:"left"}}>
                                Notice how as we add triangles to our "star", our flaps become more 1-dimensional. If we keep the ends of some finite number of flaps in the original shape (say 6) and then repeat this process on the interior, we will eventially get a fractal looking somewhat like the following:
                            </p>
                                <img src={IslamicFractalStarInterlacedfull} style={{maxWidth: "30%", border:"2px solid black"}}/>
                                <br/><br/>
                            <p style={{textAlign:"left"}}>
                                except some of the spots will be filled. This eventually will have parts that are too jagged if we increase the number of sides quick enough at each iteration. This is why many - but not all - fractals have fractional dimension. A famous one that has fractional dimension (most known ones do) is the Cantor set, with <MathJax.Node inline formula={`\\dim_{H}(C) = \\log_{3}(2)`} /> :
                            </p>
                            <img src={Triadic_Cantor_Set} style={{maxWidth: "70%"}}/>
                            <br/><br/>
                            <p style={{textAlign:"left"}}>
                                The Cantor set is defined as <MathJax.Node inline formula={`C = \\cap_{i=0}^{\\infty} \\cup_{j=0, j \\neq 1 \\mod{2}}^{3^{i}} [\\frac{j}{3^{i}}, \\frac{j+1}{3^{i}}]` } />. This is a nowhere dense set with measure zero. An example of a fractal with integer Hasudorff dimension is the boundary of the Mendelbrot set, which has Hausdorff dimension 2:

                            </p>
                            <img src={mandelbrot} style={{maxWidth: "70%"}}/>
                            <br/><br/>
                            <p style={{textAlign:"left"}}>
                                We now turn to the whole point of us understanding what the Hausorff dimension of an open nonempty subspace of <MathJax.Node inline formula={`R^{n}`} />; we say an attractor <MathJax.Node inline formula={`\\Lambda`} /> is strange if the dynamical system <MathJax.Node inline formula={`(\\Lambda, f)`} /> is chaotic and <MathJax.Node inline formula={`\\Lambda`} /> is a fractal. 
                                <MathJax.Node inline formula={`\\Lambda`} /> is said to be fractal if <MathJax.Node inline formula={`\\dim_{H}(\\Lambda)`} /> is not an integer.
                            </p>
                            <img src={henon_3} style={{maxWidth: "70%", border:"2px solid black"}}/>
                            <img src={lorenz_sys} style={{maxWidth: "70%", border:"2px solid black"}}/>
                            <img src={rossier_sys} style={{maxWidth: "70%", border:"2px solid black"}}/>

                        </div>

                    </MathJax.Provider>
                </Container>
            </Jumbotron>
        </div>
      );
    }
  }
  
  export default Applications;
  