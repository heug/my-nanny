import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Image } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';
import './styles.css';

const amazonButtonImage = 'https://images-na.ssl-images-amazon.com/images/G/01/lwa/btnLWA_gold_156x32.png';

const amazonLogin = () => {
  const options = { scope: 'profile' };
  amazon.Login.authorize(options, '/app/home');
  return false;
};

const links = {
  1: '/',
  2: '/visitor-getting-started',
  3: 'http://api.my-nanny.org/apidocs/index.html',
  4: 'http://api.my-nanny.org/jsdocs/index.html',
  5: 'https://github.com/dystopian-smurfs/my-nanny-api',
};

const handleLink = (eventKey) => browserHistory.push(links[eventKey]);

const navbarInstance = (
  <Navbar fixedTop >
    <Navbar.Header>
      <Navbar.Brand>
        <a eventKey={1} onClick={() => handleLink(1)}>myNanny</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <MenuItem eventKey={2} onSelect={handleLink}>Getting Started</MenuItem>
        <MenuItem href={links[3]}>API Docs</MenuItem>
        <MenuItem href={links[4]}>Technical Docs</MenuItem>
        <MenuItem href={links[5]}>Github</MenuItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarInstance;
