import React from 'react';
import { getAccount, addChild } from '../../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import { Tabs, Tab } from 'react-bootstrap';
import IndividualKid from '../IndividualKid/index';
import config from '../../config';
import './kids.css';

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var fullDate = year + '-' + month + '-' + day;

class Kids extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newChildName: '',
      newChildPhone: '',
      phone: '',
      username: '',
      email: '', 
      urlPrefix: config.baseUrl,
      children: [],
      adding: false,
      amazonToken: '',
    };
  }

  componentWillMount() {
    this.setState({ amazonToken: localStorage.getItem('amazon-token') });
  }

  componentDidMount() {
    this.props.getAccount(this.state.amazonToken, fullDate);

    // TODO: Get this out of here
    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + this.state.amazonToken,
      type: 'GET',
    }).done(dataRes => {
      const data = JSON.parse(dataRes);
      this.setState({ username: data.username }); 
      this.setState({ phone: data.phone });
      this.setState({ email: data.email });
      this.setState({ children: data.children });
    });

  }

  addChild(e) {
    var child = {
      'child': {
        'name': this.state.newChildName,
        'phone': this.state.newChildPhone
      }
    };
    this.props.addChild(this.state.amazonToken, child);
    this.setState({ adding: false });
    location.reload();
  }

  handleInputChange(e) {
    console.log('in handle input');
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    console.log('newchildname', this.state.newChildName);
    console.log('newchildphone', this.state.newChildPhone);
  }

  addChildView(e) {
    e.preventDefault();
    console.log('e.target', e.target);
    const inputChange = {};
    inputChange[e.target.name] = true;
    this.setState(inputChange);
    console.log('state', this.state);
  }

  render() {
    if (this.state.children.length === 0 || this.state.adding === true) {
      return (
        <div className='kids col-md-12'>
          <h2>Add a Child</h2>
            <Form>
              <FormControl type='text' name='newChildName' placeholder='Name' 
                onChange={this.handleInputChange.bind(this)}>
              </FormControl>
              <FormControl type='text' name='newChildPhone' placeholder='Phone Number' 
               onChange={this.handleInputChange.bind(this)}>
              </FormControl>
              <Button className='btn btn-default' onClick={this.addChild.bind(this)}>
                Add Child
              </Button>
            </Form>
        </div>
      );
    } else {
      return (
        <div className='col-md-12'>
          <h3>My Children</h3>

          <Tabs defaultActiveKey={0} id='uncontrolled-tab-example'>
            {
              this.state.children.map((child, index) => {
                return (
                  <Tab eventKey={index} title={child.name} key={child.id}>
                    <IndividualKid child={child} index={index} key={child.id} amazonToken={this.state.amazonToken}/>
                  </Tab>
                );
              }
              )
            }
          </Tabs>
          <br />
          <Button name='adding' onClick={this.addChildView.bind(this)}>Add a Child</Button>
        </div>
      );
    } 
  } 
}

const mapStateToProps = function(state) {
  return {
    account: state.account,
    children: state.children,
    chores: state.chores
  };
};


Kids.contextTypes = {
  store: React.PropTypes.object
};

var mapDispatchToProps = function(dispatch) {
  return bindActionCreators({ getAccount: getAccount, addChild: addChild }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Kids);
