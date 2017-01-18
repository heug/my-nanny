import React from 'react';
import { Button } from 'react-bootstrap';



class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      amazonId: '999888777666',
      username: '',
      email: '',
      phone: '',
      password: '',
      passwordDupe: '',
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  submitSignupForm(e) {
    console.log(e.target);
    const signupData = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'account': {
        'username': this.state.username,
        'phone': this.state.phone,
        'email': this.state.email
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/account',
      type: 'POST',
      dataType: 'application/json',
      data: signupData,
      complete: function (data) {
        console.log('Added account:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td>First Name</td>
                <td><input type='text' name='username'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td><input type='text' name='email'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td><input type='text' name='phone'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <div class='dropdown'>
                  <Button class='dropbtn'>Time Zone</Button>
                  <div class='dropdown-content'>
                    <a href='#'>US/Eastern</a>
                    <a href='#'>US/Central</a>
                    <a href='#'>US/Mountain</a>
                    <a href='#'>US/Pacific</a>
                    <a href='#'>US/Hawaii</a>
                  </div>
                </div>
              </tr>
              <tr>
                <td>Password</td>
                <td><input type='password' name='password'
                  placeholder='password'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
              <tr>
                <td>Re-type</td>
                <td><input type='password' name='passwordDupe'
                  placeholder='password'
                  onChange={this.handleInputChange.bind(this)}/>
                </td>
              </tr>
            </tbody>
          </table>
          <Button onClick={this.submitSignupForm.bind(this)}>Sign Up</Button>
        </form>
      </div>
    );
  }
}


export default Signup;








  