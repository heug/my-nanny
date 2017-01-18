import React, { Component } from 'react';
import Nav from '../Nav';
import { Grid, Navbar, Jumbotron, Button, Row } from 'react-bootstrap';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div className='App container'>
        <Row>
          <Nav />
        </Row>
        <Row className='childRow'>
          { this.props.children }
        </Row>
      </div>
    );
  }
}

export default App;
