(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(1),s=a.n(n),o=a(30),r=a.n(o),l=(a(113),a(31)),c=a(16),j=a(18),d=a(17),b=(a.p,a(114),a(40),a(28),a(173)),h=a(174),f=(a(115),a(37)),x=a(171),m=a(172),u=a(62),p=a(3),O=a.n(p),g=a.p+"static/media/lorenz.a2144680.jpg",y=a.p+"static/media/Lorenzsimulation.e0f9719b.mov",_=a.p+"static/media/lorenz_x_vs_t.2c775a13.jpg",w=a.p+"static/media/lorenz_y_vs_t.c41fae6a.jpg",N=a.p+"static/media/lorenz_z_vs_t.d2b15dfa.jpg",v=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={},e.render=function(){var e;return Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{fluid:!0,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)("h1",{children:"Lorenz"}),Object(i.jsx)("i",{children:"In this section we will go over the history of Lorenz and his equations"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:g,style:{maxWidth:"70%"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"The Lorenz system served its original purpose to model certain aspects of weather. Specifically, many mathematicians at the time were trying to model a single fluid particle being heated from below and cooled from above in order to make predictions on the weather. These models were very complicated and often involved partial differential equations. Lorenz decided to simplify these models by just using a system of nonlinear ordinary differential equations. The main interest in this model arises from the dynamics of the model itself, and not much its effect of predicting the weather. So far in our class we have only covered \u201cnice\u201d differential equations which do not exhibit any chaos and can actually be proved not to be chaotic by the Poincare Bendixson theorem. This model motivated many to begin formulating chaos theory and its importance cannot be understated."}),Object(i.jsx)(O.a.Provider,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(u.Player,(e={playsInline:!0,poster:"/assets/poster.png",src:y,muted:!0,autoPlay:!0},Object(f.a)(e,"playsInline",!0),Object(f.a)(e,"children",Object(i.jsx)(u.ControlBar,{disableCompletely:!0})),e)),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:_,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:w,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:N,style:{maxWidth:"70%",border:"2px solid black"}})]})})]})})})},e}return a}(s.a.Component),k=a.p+"static/media/discrete_iteration_stable.3e9d04b9.jpg",T=a.p+"static/media/iterations_pt_2.4f848f38.jpg",A=a.p+"static/media/iterations_pt_3.9911ba8c.jpg",C=a.p+"static/media/stable_iterations.41c3c963.jpg",W=a.p+"static/media/shartoski.6a673089.PNG",U=a.p+"static/media/shark_ex_3_pt.d5397434.jpg",L=a.p+"static/media/shark_ex_diff_eqn.735fb62e.jpg",q=a.p+"static/media/unstable_iterate.8fa8f55e.jpg",S="x_{n+1} = f(x_{n})",I=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={},e.render=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{fluid:!0,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)("h1",{children:"Discrete Dynamical Systems"}),Object(i.jsx)("i",{children:"In this section we will go over the basics of Discrete Dynamical Systems"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(O.a.Provider,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:{textAlign:"left"},children:["Definition. A discrete dynamical system is given by the equation ",Object(i.jsx)(O.a.Node,{formula:S}),"where ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f: M \\rightarrow M"})," for any arbitrary metric space ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"M"}),"and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n \\in \\mathbf{N}"})]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["For the remainder of our discussion, we will always assume ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f"})," is a continuous function and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"M = R^{n}"})]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["Proposition 2. Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f \\in C^{1}(\\mathbf{R})"})," and have a fixed point ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x_{0}"}),". Then ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x_0{}"})," is a sink if ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x_{0})| < 1"}),", a source if ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x_{0})| > 1"}),", and otherwise we cannot conclude anything."]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["Proof: This proposition is pretty trivial. Just choose ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta > 0"})," s.t. ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x) - f'(x_{0})| < \\epsilon"})," for all ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in B_{\\delta}(x_{0})"}),". Then we can assume ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f'(x)"})," has the same sign as ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f'(x_{0})"})," for ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in B_{\\delta}(x_{0})"}),". Thus, for ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in B_{\\delta}(x_{0})"}),"we have ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|x-x_{0}|\\cdot (|f'(x_{0})| - \\epsilon) \\leq |f(x) - f(x_{0})| \\leq |x-x_{0}|\\cdot (|f'(x_{0})| + \\epsilon) "}),". If ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x_{0})| > 1"}),", we get the difference between the ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f"})," values in absolute value is larger than the absolute difference in the ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x"})," values. The opposite happens if ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x_{0})|<1"}),".",Object(i.jsx)("br",{}),"When ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x_{0})| = 1"}),", things become too sensitive (the derivitive can immediately become larger or smaller in absolute value). So we can't really conclude anything. The following examples illustrate this:"]}),Object(i.jsx)("img",{src:k,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:T,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:A,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:["Below we have an example of a stable point for ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f(x) = 1.5\\cdot \\sin(x-1)"})," at ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x_{0} = -1.20675"}),". Since ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f'(x) = 1.5\\cdot \\cos(x-1)"}),",",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f'(x_{0})| = |-.89| < 1"})," - so by our proposition this should be a stable fixed point, as the following picture shows:"]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:C,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:["Below we have a fixed point at ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x = 0"}),". Clearly for  ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y = -3x,\\text{ } |y\u2019| > 1"})," therefore we have an unstable fixed point. Notice in the cobweb plot how the iterations are going away from this fixed point:"]}),Object(i.jsx)("img",{src:q,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:["Sharkovskii Theorem. Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f: I \\to I"})," continuous for some interval ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"I \\subset R"}),". Consider the following ordering of the natural numbers (which is a total order, but not well-ordered):"]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:W,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:["If ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f"})," has a periodic point of length m then ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f"})," will have a periodic point of length n for all",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n > m"}),"."]}),Object(i.jsxs)("p",{children:["The following is an example of a function with a period of length three (",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f(x)=-\\frac{19}{30}x^{2}+\\frac{51}{10}-\\frac{8}{3}"}),"):"]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:U,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"Here is another way of visualizing it:"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:L,style:{maxWidth:"70%",border:"2px solid black"}})]})})]})})})},e}return a}(s.a.Component),H=a(47),z=700,B=1e3,P=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a),(e=t.call(this)).state={data_red:[],data_blue:[]},e.f=function(e){return e=4*(e/=1e3)*(1-e),e*=B},e.g=function(e){return e=4*(e/=700)*(1-e),e*=z},e.modify_particles=function(){var t,a=e.state.data_red;for(t=0;t<50;t++)a[t]={x:Math.floor(e.f(a[t].x)),y:Math.floor(e.g(a[t].y))};var i=e.state.data_blue;for(t=0;t<50;t++)i[t]={x:Math.floor(e.f(i[t].x)),y:Math.floor(e.g(i[t].y))};e.setState(Object(l.a)(Object(l.a)({},e.state),{},{data_red:a,data_blue:i}))},e.render=function(){var t=e.state.data_red,a=e.state.data_blue;return Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{fluid:!0,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)("h1",{children:"Chaos"}),Object(i.jsx)("i",{children:"This is a website we made for our final project on Chaos Theory"}),Object(i.jsxs)(H.b,{height:z,width:B,children:[Object(i.jsx)(H.a,{data:t,color:"black"}),Object(i.jsx)(H.a,{data:a,color:"red"})]})]})})})};var n=[],s=0;for(s=0;s<50;s++)n.push({x:Math.random()*B/2,y:Math.random()*z});var o=[];for(s=0,s=0;s<50;s++)o.push({x:Math.random()*B/2+500,y:Math.random()*z});return e.state.data_red=n,e.state.data_blue=o,setInterval(e.modify_particles,200),e}return a}(s.a.Component),M=a.p+"static/media/brian-wissman-strange-attractors.aee79580.jpg",D=a.p+"static/media/henon_3.477056f4.jpg",V=a.p+"static/media/lorenz_sys.70c5f984.jpg",F=a.p+"static/media/rossier_sys.b8f705b4.jpg",R=a.p+"static/media/edges.ba41d9af.png",J=a.p+"static/media/Islamic-Fractal-Star-Interlaced-full.1e71d031.jpg",E=a.p+"static/media/Triadic_Cantor_Set.511664f3.png",K=a.p+"static/media/mandelbrot.4ba6dff8.gif",G=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={},e.render=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{fluid:!0,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)("h1",{children:"Hausdorff Dimension and Strange Attractors"}),Object(i.jsx)("i",{children:"In this section we will talk about what it means to be a fractal and how it relates to Strange Attractors"}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:M,style:{maxWidth:"75%",maxHeight:"300px",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(O.a.Provider,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{style:{textAlign:"left"},children:["To start, we define the Hausdorff dimension of an open nonempty subspace of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"R^{n}"})," for ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n \\geq 2"})," :"]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["For any nonempty open set ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U \\subset R^{n}"})," we define the diameter of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," to be ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"d(U) = \\sup_{x \\in U,\\text{ } y \\in U} |x - y|"}),". For any open cover ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\{V_{i}\\}_{i \\in I}"}),"of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"}),", we say it is a ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta"}),"-cover if it is a countable cover and if the diameter of every set is less than ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta"}),". Define,",Object(i.jsx)(O.a.Node,{formula:"\\mu^{\\alpha}(U) = \\lim_{\\delta \\to 0} \\inf{\\{\\sum_{j}d(V_{j})^{\\alpha}\\text{ }|\\text{ such that } \\{V_{j}\\} \\text{ is a delta cover of U} \\}}"}),"This defines a premeasure on all open sets ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," in the subspace topology of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"M"}),". Hence, we get a borel ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\sigma"}),'-algebra on the set of all subsets that are "nice" (',Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\mu^{\\alpha}(A) = \\mu^{\\alpha}(A-B) + \\mu^{\\alpha}(B-A)"})," for all ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"A"})," implies ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"B"})," is in our sigma algebra) by Caratheodory's Theorem, with ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\mu^{\\alpha}"})," a measure on this sigma algebra. The Hausdorff dimension of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," is defined as ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\dim_{H}(U) = \\inf \\{\\alpha\\text{ }|\\text{ } \\mu^{\\alpha}(U) = 0\\} = \\sup \\{\\alpha\\text{ }|\\text{ } \\mu^{\\alpha}(U) = \\infty\\}"}),". We can define this for closed sets with infinitely many points analagously. For finitely many points, there can be some difficulties - namely the sup that is shown below might not be well-defined, but in the grand scheme of things this is not at all an issue."]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["Proposition: ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"dim_{H}(U)"})," makes sense (the equality in particular)",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Proof: Consider ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\mu^{\\alpha}(U) < \\infty"})," for some ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\alpha"}),". Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\beta > \\alpha"}),". Then for ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta > 0\\text{, } \\mu_{\\delta}^{\\beta}(U) = \\lim_{\\delta \\to 0}\\inf\\{\\sum_{j} d(V_{j})^{\\beta}\\text{ }|\\text{ }\\{V_{j}\\}\\text{ a delta cover of U} \\} \\leq \\lim_{\\delta\\to 0}\\delta^{\\beta - \\alpha}\\inf\\{\\sum_{j} d(V_{j})^{\\beta}\\text{ }|\\text{ }\\{V_{j}\\}\\text{ a delta cover of U} \\} = 0\\text{ }"}),"since ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta^{\\beta - \\alpha} \\to 0 \\text{ as } \\delta \\to 0"})," and the other part of the inf is finite. For ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\beta < \\alpha"}),", we get the same thing but a factor of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta^{\\beta - \\alpha}\\text{ }"})," in the other direction, which goes to infinity as ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\delta \\to 0"}),". So what remains is to prove that such a value exists. Since ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," open and nonempty (and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n \\geq 2"})," ), it follows that ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," contains infinitely many points. So ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\mu^{0}(U) = \\infty"}),". Also, ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\mu^{n+1}(U) = 0"})," since ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," is an open subset of n-dimensional Euclidean space and the ball in such a space has finite Hausdorff dimension. So the sup and inf are defined and equal."]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["Proposition: ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\dim_{H}(B_{1}(0)) = n"})," ",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),"Proof: ",Object(i.jsx)(O.a.Node,{formula:"\\mu^{n}(B_{1}(0)) = \\lim_{\\delta\\to 0}\\inf\\{\\sum_{j} d(V_{j})^{n}\\text{ }|\\text{ }\\{V_{j}\\} \\text{ a delta cover of U} \\} = d(B_{1}(0))^{n} < \\infty"})," Since only one such value can be finite (from above), we are done."]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:['Notice that the Hausdorff dimension of a space is really just a measure of how rough the space is relative to the ambient space - for if there are too many "approximate hyperplanes" in the subspace, then the hasudorff dimension will be lowered, averaging the "higher dimensional" parts with the "lower dimensional" parts. To give you an idea of this, consider the following sequence of shapes:',Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]}),Object(i.jsx)("img",{src:R,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{style:{textAlign:"left"},children:'Notice how as we add triangles to our "star", our flaps become more 1-dimensional. If we keep the ends of some finite number of flaps in the original shape (say 6) and then repeat this process on the interior, we will eventially get a fractal looking somewhat like the following:'}),Object(i.jsx)("img",{src:J,style:{maxWidth:"30%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["except some of the spots will be filled. This eventually will have parts that are too jagged if we increase the number of sides quick enough at each iteration. This is why many - but not all - fractals have fractional dimension. A famous one that has fractional dimension (most known ones do) is the Cantor set, with ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\dim_{H}(C) = \\log_{3}(2)"})," :"]}),Object(i.jsx)("img",{src:E,style:{maxWidth:"70%"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["The Cantor set is defined as ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"C = \\cap_{i=0}^{\\infty} \\cup_{j=0, j \\neq 1 \\mod{3}}^{3^{i}} [\\frac{j}{3^{i}}, \\frac{j+1}{3^{i}}]"}),". This is a nowhere dense set with measure zero. An example of a fractal with integer Hasudorff dimension is the boundary of the Mendelbrot set, which has Hausdorff dimension 2:"]}),Object(i.jsx)("img",{src:K,style:{maxWidth:"70%"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["Such fractals we will not consider fractals, but are worth being aware of. An interesting question worth asking is if there are any connections to algebraic topology. The tempting answer to this is no since many of the interesting properties of these spaces are inherently related to the metric, not the Topology of the space itself since locally things are not so nice. However, there are interesting questions one can ask if we restrict ourselves a bit: Define the well-behaved fundamental group ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\pi_{U}^{wb}(x_{0}) = \\{[f]: I \\to U | f(0) = x_{0},\\text{ }f\\text{ continuous, and } \\dim_{H}(K) = 1\\text{ } \\forall{K \\subset f(I)}\\text{ open} \\}"}),'. This well-behaved fundamental group is fundamentally different from the usual fundamental group (pun intended) since being path-connected does not imply points have the same simple fundamental group. An example would be points that are connected through fractal that has fractional dimension. We can also form a "badly-behaved" fundamental group by taking paths that have fractional dimension along all open subsets of their image. The big question is if there is a natural decomposition of the original fundamental group into these two - or perhaps if we abelianize everything using the power of singular homology things decompose... I suspect the answer is no because there might be paths that are neither well-behaved nor badly-behaved, but how does this occur?']}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:["We now turn to the whole point of us understanding what the Hausorff dimension of a suitable subspace of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"R^{n}"}),"; we say an attractor ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\Lambda"})," is strange if the dynamical system ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"(\\Lambda, f)"})," is chaotic and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\Lambda"})," is a fractal.",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\Lambda"})," is said to be fractal if ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\dim_{H}(\\Lambda)"})," is not an integer."]}),Object(i.jsxs)("p",{style:{textAlign:"left"},children:[Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\Lambda"})," is said to be attracting if it is compact and invariant under ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f"})," (",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f(\\Lambda) = \\Lambda"}),") and there is a neighborhood ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"})," of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\Lambda"})," s.t. ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"d(f^{n}(x), \\Lambda)\\to 0"})," as ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n \\to \\infty"})," for all ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x\\in U"}),". Note that this d is not the diameter, but rather a metric. The definition of a repeller is analagous, so we won't spend any time on it. To give a basic example of an attracting set, just consider the set ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\Lambda = \\{0\\}"})," and the function ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f(x) = x^{2\\cdot{n}+1}"}),". ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f(0) = 0"})," and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"(-\\frac{1}{2}, \\frac{1}{2})"})," is the desired neighborhood."]}),Object(i.jsx)("p",{style:{textAlign:"left"},children:"Below we have a few of the famous Strange Attractors in no particular order."}),Object(i.jsx)("img",{src:D,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:V,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:F,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{})]})})]})})})},e}return a}(s.a.Component),Q=a.p+"static/media/chaos_100_simulations.9f005df9.jpg",X=a.p+"static/media/chaos_1000_simulations.a3bf0692.jpg",Y=a.p+"static/media/chaos_10000_simulations.e7f81830.jpg",Z=a.p+"static/media/chaos_line_graph_100_iterations.f3d67590.jpg",$=a.p+"static/media/chaos_line_graph_1000_iterations.9871f1dc.jpg",ee=a.p+"static/media/new_double_map.a33797ce.jpg",te=a.p+"static/media/new_tent_map_chaos.078d8f2e.jpg",ae=a.p+"static/media/doubling_map_0003.2365dca8.jpg",ie=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={},e.render=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{fluid:!0,children:Object(i.jsxs)(m.a,{children:[Object(i.jsx)("h1",{children:"Chaos Theory"}),Object(i.jsx)("i",{children:"In this section we will go over the main reasons Chaos Theory is worthwhile"}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)(O.a.Provider,{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["We begin with the definition of a chaotic function ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f:[a,b] \\to [a,b]"}),"; such a function is said to be Chaotic if it is continuous and satisfies the following three conditions: "]}),Object(i.jsxs)("ol",{style:{textAlign:"left"},children:[Object(i.jsxs)("li",{children:["Periodic points of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f"})," are dense in ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"[a,b]"})," - in other words, any ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in [a,b]"})," can be approximated by a point ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y \\in [a,b]"})," s.t.",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y"})," is periodic ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"(f^{m}(y) = y"})," for some ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"m\\in \\mathbf{N})"})]}),Object(i.jsxs)("li",{children:["For any open sets ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U_{1}"}),", ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U_{2}"})," there exists ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in U_{1}"}),"s.t. ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"f^{m}(x) \\in U_{2}"})," for some ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"m \\in \\mathbf{N}"})]}),Object(i.jsxs)("li",{children:["There exists some ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\beta > 0"})," s.t. for any ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x_{0} \\in [a,b]"})," and neighborhood ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U"}),"of ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x_{0}"})," there exists some ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y_{0} \\in U"})," s.t. for some ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n_{0}"})," we have ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|f^{n_{0}}(x_{0}) - f^{n_{0}}(y_{0})| > \\beta"}),"."]})]}),Object(i.jsx)("p",{children:"Roughly speaking, this means that the initial conditions are sensitive and arbitrarily small regions visit every other region. The initial conditions are sensitive in the sense that if you try to approximate an input value, that approximation is not guranteed to work nomatter how accurate it is."}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"Notice here that below is just the discrete logistic map. What looks like a nice differential equation actually is chaotic under given parameters. In this case, the parameter which represents growth is 4. On the unit interval, this discrete differential equation is chaotic and simulated below for various iteration:"}),Object(i.jsx)("img",{src:Q,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:X,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:Y,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"Here is another cobweb plot which was demonstrated previously when we discussed fixed points. Notice that the differential equation ends up going everywhere in the domain of the function and after 1,000 iterations fills almost the entire plot:"}),Object(i.jsx)("img",{src:Z,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:$,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"Here we have the doubling map and the tent map. These are both very simple discrete differential equations which are very chaotic, and this is demonstrated below. Again, we have another cobweb map for the doubling map which shows how chaotic it is. Something to consider is that numerical error is a huge issue with these plots. At first, when simulating the cobweb plot for the doubling map it ended up producing an unexpected figure. Well, since chaotic systems are so sensitive to initial conditions, numerical error can greatly disturb what the plot should look like. This caused us to have to use far greater precision than normal to get the desired plot!"}),Object(i.jsx)("img",{src:ee,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:te,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("img",{src:ae,style:{maxWidth:"70%",border:"2px solid black"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("p",{children:["Lets now consider an interesting map: the shift map. Define the shift map ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"T: \\{0,1 \\}^{\\mathbf{N}} \\to \\{0,1 \\}^{\\mathbf{N}}"})," is given by ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"T((x_{1}, x_{2},\\cdots)) = (x_{2}, x_{3}, \\cdots)"}),". To make ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\{0,1 \\}^{\\mathbf{N}}"})," a metric space, we will define a metric ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"d: \\{0,1 \\}^{\\mathbf{N}} \\times \\{0,1 \\}^{\\mathbf{N}} \\to \\mathbf{R}^{\\geq 0}"})," by ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"d((x_{1}, \\cdots), (y_{1}, \\cdots)) = \\sum_{i=1}^{\\infty} \\frac{1}{2^{i}}|x_{i} - y_{i}|"}),". The fact that this is a metric space is trivial and the fact that the shift map is continuous is a standard exercise. More interestingly, we show that ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"T"})," yeilds a chaotic differential equation:",Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("ol",{style:{textAlign:"left"},children:[Object(i.jsxs)("li",{children:["We first show periodic orbits are dense. To see this, let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x=(x_{1}, x_{2}, \\cdots) \\in \\{0,1 \\}^{\\mathbf{N}}"}),". Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n_{0} \\in \\mathbf{N}"})," s.t. ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\sum_{i = n_{0}}^{\\infty} \\frac{1}{2^{i}} < \\epsilon"}),". Define ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y=(x_{1},\\cdots x_{n_{0}}, x_{1},\\cdots x_{n_{0}}, \\cdots)"}),". Observe ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"d(x, y) < \\epsilon"})," and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"T^{n_{0}}(y) = y"}),"."]}),Object(i.jsxs)("li",{children:["Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"U,V"})," be open in ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\{0,1 \\}^{\\mathbf{N}}"})," with ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in U"})," and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y \\in V"}),". Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n_{0} \\in \\mathbf{N}"})," as before. Then define",Object(i.jsx)(O.a.Node,{inline:!0,formula:"z=(x_{1}, x_{2}, \\cdots, x_{n_{0}}, y_{1}, y_{2}, \\cdots)"}),". Then ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"z \\in U"})," and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"T^{n_{0}}(z) \\in V"}),"."]}),Object(i.jsxs)("li",{children:["We now show sensitivity of initial conditions with sensitivity constant ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\frac{1}{2}"}),". Let ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"x \\in \\{0,1 \\}^{\\mathbf{N}}"})," and define ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"y = (x_{1}, x_{2}, \\cdots, x_{n_{0}}, 1-x_{n_{0}+1},1-x_{n_{0}+2}, \\cdots)"}),". Then ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"|T^{n_{0}}(x)-T^{n_{0}}(y)| = 1 > \\frac{1}{2}"})," yet ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"d(x,y) < \\epsilon"})," (for sufficiently large ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n_{0}"}),". )"]})]}),"This completes the proof. I left out some quantifiers and definitions for ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"\\epsilon > 0"})," and ",Object(i.jsx)(O.a.Node,{inline:!0,formula:"n_{0}"}),", but it should be clear where they go (and if not, it would probably make a good exercise in finding where they go)."]})]})})]})})})},e}return a}(s.a.Component),ne=a.p+"static/media/about_image.a3b8014e.jpg",se=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={},e.render=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(x.a,{fluid:!0,children:Object(i.jsx)(m.a,{children:Object(i.jsxs)("div",{style:{height:"700px"},children:[Object(i.jsx)("h1",{children:"About"}),Object(i.jsx)("img",{src:ne,style:{maxWidth:"30%",border:"1px solid black",borderRadius:"10%"}}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("p",{children:"The authors of this website are Brian Carlson and Jason Carlson. If you have any questions feel free to email jcarlson212@gmail.com or bcarls11@asu.edu"})]})})})})},e}return a}(s.a.Component),oe=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={page:"home"},e.load_page=function(t){e.setState(Object(l.a)(Object(l.a)({},e.state),{},{page:t}))},e.render=function(){var t;return t="home"===e.state.page?Object(i.jsx)(P,{}):"discrete"===e.state.page?Object(i.jsx)(I,{}):"motivationforchaos"===e.state.page?Object(i.jsx)(ie,{}):"lorenz"===e.state.page?Object(i.jsx)(v,{}):"about"==e.state.page?Object(i.jsx)(se,{}):Object(i.jsx)(G,{}),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)(b.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(i.jsx)(b.a.Brand,{href:"#home",onClick:function(){return e.load_page("home")},children:"Chaos"}),Object(i.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(i.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(i.jsxs)(h.a,{className:"mr-auto",children:[Object(i.jsx)(h.a.Link,{href:"#home",onClick:function(){return e.load_page("home")},children:"Home"}),Object(i.jsx)(h.a.Link,{href:"#discretedynamicalsystems",onClick:function(){return e.load_page("discrete")},children:"Discrete Dynamical Systems"}),Object(i.jsx)(h.a.Link,{href:"#motivationforchaos",onClick:function(){return e.load_page("motivationforchaos")},children:"Chaos Theory"}),Object(i.jsx)(h.a.Link,{href:"#lorenzequation",onClick:function(){return e.load_page("lorenz")},children:"Lorenz Equation"}),Object(i.jsx)(h.a.Link,{href:"#applications",onClick:function(){return e.load_page("applications")},children:"Hausdorff Dimension and Strange Attractors"}),Object(i.jsx)(h.a.Link,{href:"#About",onClick:function(){return e.load_page("about")},children:"About"})]})})]}),t]})},e}return a}(s.a.Component),re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),i(e),n(e),s(e),o(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(oe,{})}),document.getElementById("root")),re()},28:function(e,t,a){}},[[168,1,2]]]);
//# sourceMappingURL=main.b98245b0.chunk.js.map