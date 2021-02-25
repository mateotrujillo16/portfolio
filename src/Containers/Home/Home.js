import React from 'react';
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../../Components/Header/Header'
import About from '../About/About'
// import Content from '../../Components/Content/Content'
import { Button, Card, CardDeck, CardGroup } from 'react-bootstrap';
import Contact from '../Contact/Contact'
import './Home.css'


function Home(props) {
  // let image = require('../../images/IMG_2174.JPG')

  return (
    <div id="home">
      <Header title="Mateo Trujillo" />
      <div className="media">
        <img className="img" alt="profile" />
      </div>
      <About />
    </div>
  )
};

export default Home