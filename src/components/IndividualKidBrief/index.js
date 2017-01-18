import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from '../../config';
import { toggleEditChild, toggleShowChild } from '../../actions/actions';
import './individualKidBrief.css';

import { Button, Form, FormControl } from 'react-bootstrap';

  
class IndividualKidBrief extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: this.props.child.name,
      phone: this.props.child.phone,
      id: this.props.child.id,
      urlPrefix: config.baseUrl,
    };
  }

  handleInputChange(e) {
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  editChild(e) {
    this.context.store.dispatch(toggleEditChild(this.state.id, this.props.child.name,
      this.props.child.phone, true, false));
  }

  confirmChanges(e) {
    const amazonToken = localStorage.getItem('amazon-token');
    const child = {
      'child': {
        'id': this.state.id,
        'name': this.state.name,
        'phone': this.state.phone
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Updated child:' + JSON.stringify(data));
      }
    });
    this.context.store.dispatch(toggleEditChild(this.state.id, this.props.child.name,
      this.props.child.phone, true, true));
  }

  deleteChild(e) {
    const amazonToken = localStorage.getItem('amazon-token');
    const child = {
      'child': {
        'id': this.state.id
      }
    };
    $.ajax({
      url: this.state.urlPrefix + '/api/children?access_token=' + amazonToken,
      type: 'DELETE',
      dataType: 'application/json',
      data: child,
      complete: function (data) {
        console.log('Deleted Child:' + JSON.stringify(data));
      }
    });
    this.context.store.dispatch(toggleShowChild(this.state.id));
  }

  render() {
    return (
      <div className='child-row-wrapper'>
        {(this.props.children[this.state.id].show === true &&
          this.props.children[this.state.id].editable === false && 
          <div className='row child-row'>
              <p className='col-md-5 child-row-cell'>{this.props.child.name}</p>
              <p className='col-md-5 child-row-cell'>{this.props.child.phone}</p>
              <div className='col-md-2 child-row-cell'>
                <div className='row'>
                  <span className='col-md-1 child-row-edit glyphicon glyphicon-edit'
                      onClick={this.editChild.bind(this)}></span>
                  <span className='col-md-1 child-row-remove glyphicon glyphicon-remove'
                        onClick={this.deleteChild.bind(this)}></span>
                </div>
              </div>
          </div>
        )}
        {(this.props.children[this.state.id].editable === true &&
          <div className='row child-row'>
              <input className='col-md-5 child-row-cell'
                     type='text'
                     name='name'
                     value={this.state.name}
                     onChange={this.handleInputChange.bind(this)} />
              <input className='col-md-5 child-row-cell'
                     type='text'
                     name='phone'
                     value={this.state.phone}
                     onChange={this.handleInputChange.bind(this)} />
              <div className='col-md-2 child-row-cell'>
                <div className='row'>
                  <span className='col-md-1 child-row-edit glyphicon glyphicon-ok'
                        onClick={this.confirmChanges.bind(this)}></span>
                </div>
              </div>
          </div>
        )}
      </div>
    );
  } 
}

IndividualKidBrief.contextTypes = {
  store: React.PropTypes.object
};

var mapStateToProps = function(state) {
  return {
    children: state.children,
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ }, dispatch);
  //WHY DON'T WE SEEM TO NEED THIS?  DON'T HAVE IT FOR ALL FUNCS BUT
  //THEY STILL FIRE
};

export default connect(mapStateToProps, matchDispatchToProps)(IndividualKidBrief);




