import React from 'react';
import $ from 'jquery';
import config from '../../config';
import { Button } from 'react-bootstrap';


class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      title: this.props.chore.title,
      name: this.props.child.name,
      details: this.props.chore.details,
      date: this.props.chore.date,
      amazonToken: this.props.amazonToken,
      id: this.props.child.id,
      choreId: this.props.chore.id,
      urlPrefix: config.baseUrl,
      completed: false,
      editable: false,
    };
  }

  handleInputChange(e) {
    // console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  makeEditable(e) {
    // console.log('in make editable');
    this.setState( { 'editable': true } );
    // console.log('state in updateChore', this.state);
  }

  createChore() {
    return {
      'child': {
        'id': this.state.id
      },
      'chores': [{
        'id': this.state.choreId,
        'title': this.state.title,
        'details': this.state.details,
        'date': this.state.date,
        'completed': this.state.completed
      }]
    };
  }

  updateChore(e) {
    // console.log('in update chore', e);
    const chore = this.createChore();
    // console.log('state in updateChore', this.state);
    // console.log('chore', chore);
    $.ajax({
      url: this.state.urlPrefix + '/api/chores?access_token=' + this.state.amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        console.log('Updated chore:' + JSON.stringify(data));
      }
    });
    this.setState( { 'editable': false } );
    // console.log('state in updateChore', this.state);
  }

  deleteChore(e) {
    // console.log('in delete chore');
    const chore = this.createChore();
    $.ajax({
      url: this.state.urlPrefix + '/api/chores?access_token=' + this.state.amazonToken,
      type: 'DELETE',
      dataType: 'application/json',
      data: chore,
      complete: function (data) {
        console.log('Deleted chore:' + JSON.stringify(data));
      }
    });
    this.setState({ show: false });
  }

  markCompleted(e) {
    console.log('in mark completed');
    this.setState({ completed: true });
    this.updateChore();
  }


  render() {
    return (
      <div className='child-row-wrapper'>
        {(this.state.show === true &&
          this.state.editable === false && 
          <div className='row child-row'>
              <p className='col-md-2 child-row-cell'>{this.state.date}</p>
              <p className='col-md-3 child-row-cell'>{this.state.title}</p>
              <p className='col-md-5 child-row-cell'>{this.state.details}</p>
              <div className='col-md-2 child-row-cell'>
                <div className='row'>
                <span className='col-md-1 child-row-edit glyphicon glyphicon-ok'
                        onClick={this.markCompleted.bind(this)}></span>
                  <span className='col-md-1 child-row-edit glyphicon glyphicon-edit'
                        onClick={this.makeEditable.bind(this)}></span>
                  <span className='col-md-1 child-row-remove glyphicon glyphicon-remove'
                        onClick={this.deleteChore.bind(this)}></span>
                </div>
              </div>
          </div>
        )}
        {(this.state.show === true &&
          this.state.editable === true && 
          <div className='row child-row'>
              <input className='col-md-2'
                     type='date'
                     name='date'
                     value={this.state.date}
                     onChange={this.handleInputChange.bind(this)} />
              <input className='col-md-3 child-row-cell'
                     type='text'
                     name='title'
                     value={this.state.title}
                     onChange={this.handleInputChange.bind(this)} />
              <input className='col-md-5 child-row-cell'
                     type='text'
                     name='details'
                     value={this.state.details}
                     onChange={this.handleInputChange.bind(this)} />
              <div className='col-md-2 child-row-cell'>
                <div className='row'>
                  <span className='col-md-1 child-row-edit glyphicon glyphicon-ok'
                        onClick={this.updateChore.bind(this)}></span>
                </div>
              </div>
          </div>
        )}
      </div>
    );  
  } 
}


export default Chores;






