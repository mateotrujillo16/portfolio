import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link, animateScroll as Scroll } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './App.module.css'

import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Contact from './Containers/Contact/Contact';
import Projects from './Containers/Projects/Projects';
import Resume from './Containers/Resume/Resume'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Mateo Trujillo",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Resume', path: '/resume' },
        { title: 'Projects', path: '/projects' },
        { title: 'Contact Me', path: '/contact' },
        { title: 'Resume', path: '/resume' }
      ],
      home: {
        title: 'Mateo Trujillo'
      },
      about: {
        title: 'Dummy text'
      },
      projects: {
        title: 'Dummy text'
      },
      contact: {
        title: 'Get in Touch'
      }
    }
  }

  render() {
    return (
      <Router>
        {/* Fluid takes the entire width of the screen when using react bootstrap */}
        <Container className='p-0' fluid={true}>

          <Navbar bg="white" sticky="top" expand='lg'>

            <Navbar.Brand>Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />

            <Navbar.Collapse className="border-0" id="navbar-toggle">

              <Nav className="ml-auto p-10">
                <Link className={classes.navlink} 
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Home
                  </Link>
                {/* <Link className="nav-link" to="/about">About</Link> */}
                <Link className={classes.navlink} 
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Projects
                  </Link>
                
                  <Link className={classes.navlink} 
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Resume
                  </Link>
                
                  <Link className={classes.navlink} 
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}>
                  Contact
                  </Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>

          <Home />

          <Projects />
          <Resume />
          <Contact />


          {/* Route renders a component base on the path */}
          {/* <Route path="/" exact render={() => <Home title={this.state.home.title} />} /> */}
          {/* <Route path="/projects" render={() => <Projects title={this.state.projects.title} />} />
          <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} /> */}

          <Footer />
        </Container>
      </Router>
    )
  }
}

export default App;
