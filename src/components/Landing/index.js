import React from 'react';
import { Link } from 'react-router';
import { ButtonToolbar, Button, Grid, Row, Jumbotron, Col } from 'react-bootstrap';
import Nav from '../Nav';
import Login from '../Login';
import Signup from '../Signup';
import './styles.css';
import Logo from './assets/logo.png';
import navbarInstance from '../LandingNav/index';


const amazonButtonImage = 'https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png';

const amazonLogin = () => {
  const options = { scope: 'profile' };
  amazon.Login.authorize(options, '/app/home');
  return false;
};

export const Landing = () => (
    <Grid fluid>
      {navbarInstance}
      <Row componentClass='expose'>
        <Col md={2} />
        <Col md={8}>
          <Jumbotron id='landingJumbotron'>
            <h1>Get your ducks in a row.</h1>
            <p>Kids are a breeze with myNanny</p>
            <img
            className='pull-left'
            id='amazonButton'
            alt='Login with Amazon'
            src={amazonButtonImage}
            onClick={amazonLogin.bind(this)}
            />
          </Jumbotron>
        </Col>
        <Col md={2} />
      </Row>


      <Row>
        <Col md={4}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div>
                <h2>Safety first.<br/></h2>
                myNanny welcomes kids home after school, and sends you a text confirming 
                their safe arrival.  If they don’t check in by the time you set in 
                their schedule, you’ll receive a text notification.  
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Col>

        <Col md={4}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div>
                <h2>Chores are fun.<br/></h2>
                Let myNanny do the nagging for you.  Alexa technology makes chore reminders 
                easy.  Kids receive a list of their responsibilities when they get home, 
                and they confirm with Alexa when they have finished.  
              </div>           
            </Col>
            <Col xs={2} />
          </Row>
        </Col>

        <Col md={4}>
          <Row>
            <Col xs={2} />
            <Col xs={8}>
              <div>
                <h2>Organization.<br/></h2>
                myNanny’s simple online interface gives you a daily summary of your kids’ 
                schedule and activities so that you can see your household at a glance.  
                And it’s a breeze to add chores and change schedules.  
              </div>
            </Col>
            <Col xs={2} />
          </Row>
        </Col>

      </Row>
    </Grid>
);

export default Landing;
