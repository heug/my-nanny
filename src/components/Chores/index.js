import React from 'react';
import $ from 'jquery';

class Chores extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.chore.title,
      name: this.props.child.name,
      details: this.props.chore.details,
      date: this.props.chore.date,
      amazonId: '999888777666',
      id: this.props.child.id,
      choreId: this.props.chore.id,
      urlPrefix: 'http://localhost:1337',
      // completed: false,
      editable: false,
    };
  }

  handleInputChange(e) {
    console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
  }

  makeEditable(e) {
    console.log('in make editable');
    this.setState( { 'editable': true } );
    console.log('state in updateChore', this.state);
  }

  updateChore(e) {
    // console.log('in update chore', e);
    const chore = {
      'account': {
        'amazonId': this.state.amazonId
      },
      'child': {
        'id': this.state.id
      },
      'chores': [{
        'id': this.state.choreId,
        'title': this.state.title,
        'details': this.state.details,
        'date': this.state.date
      }]
    };
    console.log('state in updateChore', this.state);
    console.log('chore', chore);
    $.ajax({
      url: this.state.urlPrefix + '/api/chores',
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


  render() {
    return (
      <div>
        {(this.state.editable === false &&
          <div>
            {this.state.title}
            {this.state.details}
            {this.state.date}
            <button onClick={this.makeEditable.bind(this)}>Edit</button> 
          </div> 
        )}

        {(this.state.editable === true && 
          <div>
            <input name='title' value={this.state.title} 
              onChange={this.handleInputChange.bind(this)}/>
            <input name='details' value={this.state.details}
              onChange={this.handleInputChange.bind(this)}/>
            <input type='date' name='date' value={this.state.date}
              onChange={this.handleInputChange.bind(this)}/>
            <button onClick={this.updateChore.bind(this)}>Update</button> 
          </div>
        )}
      </div>
    );  
  } 
}


export default Chores;






