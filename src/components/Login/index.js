import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';
import config from '../../config';
import { Button } from 'react-bootstrap';


class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      urlPrefix: config.baseUrl,
    };
  }

  loginRedirect() {
    console.log('in login redirect');
    $.ajax({
      url: this.state.urlPrefix + '/login',
      type: 'GET',
      complete: function (data) {
        console.log('Logged in:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Log In</h2>
        <Button onClick={this.loginRedirect.bind(this)}>Login</Button>
      </div>
    );
  } 
}

export default Login;
