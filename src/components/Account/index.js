import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAccount, updateAccountInStore, toggleEditable } from '../../actions/actions';
import './account.css'; 
import config from '../../config';
import $ from 'jquery';
import { Row, Col, Grid, Form, FormControl, Button, getValue } from 'react-bootstrap';
import IndividualKidBrief from '../IndividualKidBrief/index';


class Account extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: null,
      phone: null, 
      username: null,
      timezone: null,
      urlPrefix: config.baseUrl
    };
  }

  componentWillMount() {
    const amazonToken = localStorage.getItem('amazon-token');
    this.context.store.dispatch(getAccount(amazonToken));
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    console.log('timezone', this.state);
  }

  updateAccount(e) {
    const username = this.state.username || this.props.account.username;
    const phone = this.state.phone || this.props.account.phone;
    const timezone = this.state.timezone || this.props.account.timezone;
    const email = this.props.account.email;
    const amazonToken = localStorage.getItem('amazon-token');

    this.context.store.dispatch(updateAccountInStore(username, phone, timezone, email));

    const signupData = {
      'account': {
        'username': username,
        'phone': phone,
        'email': email,
        'timezone': timezone
      }
    };

    $.ajax({
      url: this.state.urlPrefix + '/api/account?access_token=' + amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: signupData,
      complete: function (data) {
        console.log('Updated account:' + JSON.stringify(data));
      }
    });

    this.context.store.dispatch(toggleEditable());
  }

  makeEditable(e) {
    this.context.store.dispatch(toggleEditable());
  }

  render() {
    return (
      <div className='col-md-12 account'>
        {(this.props.account.editable === false && 
        <div>
          <div className='row'>
            <div className='col-md-1 edit glyphicon glyphicon-edit'
                 onClick={this.makeEditable.bind(this)}>
            </div>
            <div className='col-md-11'>
              <h1 className='account-heading-name'>{this.props.account.username}</h1>
              <p className='account-heading-details'>
                <span className='account-heading-detail'>{this.props.account.email} | </span>
                <span className='account-heading-detail'>{this.props.account.phone} | </span>
                <span className='account-heading-detail'>{this.props.account.timezone}</span>
              </p>
            </div>
          </div>
        </div>
        )}
        {(this.props.account.editable === true &&
        <div>
          <div className='row'>
            <div className='col-md-1 edit glyphicon glyphicon-ok'
                 onClick={this.updateAccount.bind(this)}>
            </div>
            <div className='col-md-11'>
              <input className='account-heading-name-edit'
                     type='text'
                     name='username'
                     defaultValue={this.props.account.username}
                     onChange={this.handleInputChange.bind(this)} />
              <p className='account-heading-details-edit'>
                <input className='account-heading-detail-edit'
                       type='text'
                       name='email'
                       placeholder='Email...'
                       defaultValue={this.props.account.email}
                       onChange={this.handleInputChange.bind(this)} />
                <input className='account-heading-detail-edit'
                       type='text'
                       name='phone'
                       placeholder='Phone...'
                       defaultValue={this.props.account.phone}
                       onChange={this.handleInputChange.bind(this)} />
                <select className='account-heading-detail-edit'
                        name='timezone'
                        onChange={this.handleInputChange.bind(this)}>
                  <option value='EST'>EST / Eastern / UTC-5</option>
                  <option value='CST'>CST / Central / UTC-6</option>
                  <option value='MST'>MST / Mountain / UTC-7</option>
                  <option value='PST'>PST / Pacific / UTC-8</option>
                  <option value='HST'>HST / Hawaii / UTC-10</option>
                </select>
              </p>
            </div>
          </div>
        </div> 
        )}
        {(this.props.children &&
        <div>
          <div className='row child-row-heading'>
            <p className='col-md-5 child-row-name'>Name</p>
            <p className='col-md-5 child-row-phone'>Phone</p>
            <p className='col-md-2 child-row-settings'></p>
          </div>
          {this.props.children.map((child, index) =>
            <IndividualKidBrief child={child} index={index} key={child.id}/>
          )}
        
        </div>
        )}
      </div>
    );
  }

} 

Account.contextTypes = {
  store: React.PropTypes.object
};

var mapStateToProps = function(state) {
  var kids = [];
  var kidsToMap = state.children;
  for (var key in kidsToMap) {
    kids.push({ id: key, name: kidsToMap[key]['name'], phone: kidsToMap[key]['phone'] });
  }
  console.log('kids', kids);
  return {
    account: state.account,
    children: kids
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ getAccount: getAccount }, dispatch);
  //WE SEEM NOT TO NEED THIS?  DON'T HAVE IT FOR ALL FUNCS BUT
  //THEY STILL FIRE
};

export default connect(mapStateToProps, matchDispatchToProps)(Account);




