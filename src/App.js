import logo from './logo.svg';
import 'video-react/dist/video-react.css'; // import css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import '../node_modules/react-vis/dist/style.css';
import React from 'react';
import Lorenz from './Lorenz'
import Discrete from './Discrete'
import Home from './Home'
import Applications from './Applications'
import MotivationChaos from './MotivationChaos'



class App extends React.Component {

  state = {
    page: "home",
  }

  load_page = (page) => {
    this.setState({
      ...this.state,
      page: page
    })
  }

  render = () => {

    let page_component;
    if(this.state.page === "home"){
      page_component = <Home></Home>
    }else if(this.state.page === "discrete"){
      page_component = <Discrete></Discrete>
    }else if(this.state.page === "motivationforchaos"){
      page_component = <MotivationChaos></MotivationChaos>
    }else if(this.state.page === "lorenz"){
      page_component = <Lorenz></Lorenz>
    }else{
      page_component = <Applications></Applications>
    }
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home" onClick={ () => this.load_page("home") }>Chaos</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={ () => this.load_page("home") }>Home</Nav.Link>
            <Nav.Link href="#discretedynamicalsystems" onClick={ () => this.load_page("discrete") }>Discrete Dynamical Systems</Nav.Link>
            <Nav.Link href="#motivationforchaos" onClick={ () => this.load_page("motivationforchaos") }>Chaos Theory</Nav.Link>
            <Nav.Link href="#lorenzequation" onClick={ () => this.load_page("lorenz") }>Lorenz Equation</Nav.Link>
            <Nav.Link href="#applications" onClick={ () => this.load_page("applications") }>Applications</Nav.Link>
          </Nav>
        </Navbar>
        {page_component}
      </div>
    );
    
  }
}

export default App;
