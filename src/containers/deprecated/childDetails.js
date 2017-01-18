import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/childDetails.css';

const mapStateToProps = function(state) {
  return {
    chores: state.chores.child.chores,
    child: state.chores.child.name
  };
};

class ChildDetails extends Component {  
  
  createChoresList() {
    return (
      this.props.chores.map((chore) => {
        return (
          <li key={chore.title}>
            <span className='choreStatus'>
              {chore.completed ? '🎉' : '❌'}
            </span>
            <span className='choreTitle'>
              {chore.title}
            </span>
          </li>
        );
      })
    );    
  }

  render() {
    if (!this.props.chores) {
      return (<div>Select a user...</div>);
    }
    return (
      <div>
      <ul>
        <li>{this.props.child + '\'s chores today'}</li>
        {this.createChoresList()}
      </ul>
      </div>
    );
  }
}


export default connect(mapStateToProps)(ChildDetails);
