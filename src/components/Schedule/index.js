import React from 'react';
import $ from 'jquery';
import { FormControl, Button, Table } from 'react-bootstrap';
import config from '../../config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Schedule extends React.Component {

  constructor(props) {
    super(props); 

    this.state = {
      name: this.props.name, 
      username: '',
      id: this.props.child.id,
      amazonToken: this.props.amazonToken,
      urlPrefix: config.baseUrl,
      sunday: '',
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      originalSchedule: this.props.schedule,
      editable: false
    };
  }

  componentDidMount() {
    const amazonToken = localStorage.getItem('amazon-token');

    if (Object.keys(this.props.schedule).length !== 0) {
      this.setState({ sunday: this.props.schedule[this.props.child.id].sunday });
      this.setState({ monday: this.props.schedule[this.props.child.id].monday });
      this.setState({ tuesday: this.props.schedule[this.props.child.id].tuesday });
      this.setState({ wednesday: this.props.schedule[this.props.child.id].wednesday });
      this.setState({ thursday: this.props.schedule[this.props.child.id].thursday });
      this.setState({ friday: this.props.schedule[this.props.child.id].friday });
      this.setState({ saturday: this.props.schedule[this.props.child.id].saturday });
      this.setState({ originalSchedule: this.props.schedule[this.props.child.id] });
    }
  }

  handleInputChange(e) {
    // console.log(e.target);
    const inputChange = {};
    inputChange[e.target.name] = e.target.value;
    this.setState(inputChange);
    // console.log('state', JSON.stringify(this.state));
  }

  editSchedule(e) {
    this.setState({ editable: true });
    // this.setState({ originalSchedule: [] });
  }

  makeSchedule() {
    return {
      'child': {
        'id': this.state.id
      },
      'schedule': {
        sunday: this.state.sunday,
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wednesday: this.state.wednesday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday
      }
    };
  }

  updateSchedule(e) {
    const schedule = this.makeSchedule();
    $.ajax({
      url: this.state.urlPrefix + '/api/schedule?access_token=' + this.state.amazonToken,
      type: 'PUT',
      dataType: 'application/json',
      data: schedule,
      complete: function (data) {
        console.log('Updated schedule:' + JSON.stringify(data));
      }
    });
  }

  createSchedule(e) {
    const schedule = this.makeSchedule();
    $.ajax({
      url: this.state.urlPrefix + '/api/schedule?access_token=' + this.state.amazonToken,
      type: 'POST',
      dataType: 'application/json',
      data: schedule,
      complete: function (data) {
        console.log('Added schedule:' + JSON.stringify(data));
      }
    });
  }

  render() {
    return (
      <div>

        {((Object.keys(this.state.originalSchedule).length === 0) && 
          <div>
            <p>{this.state.name} does not currently have a Schedule. 
            Enter the times {this.state.name} is expected to arrive home in the afternoons, 
            and we will send you notifications when {this.state.name} checks in.</p>          
          </div>
        )}

        <div>
          <Table responsive>
              <thead>
                <tr>
                  <th>Sunday</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
              </thead>
            <tbody>
            {((this.state.editable === false && Object.keys(this.state.originalSchedule).length !== 0) && 
              <tr>
                <td>{this.state.sunday !== 'null' ? this.state.sunday : 'none'}</td>
                <td>{this.state.monday !== 'null' ? this.state.monday : 'none'}</td>
                <td>{this.state.tuesday !== 'null' ? this.state.tuesday : 'none'}</td>
                <td>{this.state.wednesday !== 'null' ? this.state.wednesday : 'none'}</td>
                <td>{this.state.thursday !== 'null' ? this.state.thursday : 'none'}</td>
                <td>{this.state.friday !== 'null' ? this.state.friday : 'none'}</td>
                <td>{this.state.saturday !== 'null' ? this.state.saturday : 'none'}</td>
                {(this.props.schedule !== null &&
                  <td><Button onClick={this.editSchedule.bind(this)}>Edit</Button></td>
                )}
              </tr>
            )}

            {((Object.keys(this.state.originalSchedule).length === 0 && this.state.editable !== true) &&
              <tr>
                <td><FormControl name='sunday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.sunday} /></td>
                <td><FormControl name='monday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.monday} /></td>
                <td><FormControl name='tuesday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.tuesday} /></td>
                <td><FormControl name='wednesday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.wednesday} /></td>
                <td><FormControl name='thursday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.thursday} /></td>
                <td><FormControl name='friday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.friday} /></td>
                <td><FormControl name='saturday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.saturday} /></td>
                <td><Button onClick={this.createSchedule.bind(this)}>Create</Button></td>
              </tr>
            )}
            {((this.state.editable === true && Object.keys(this.state.originalSchedule).length !== 0) &&
              <tr>
                <td><FormControl name='sunday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.sunday} /></td>
                <td><FormControl name='monday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.monday} /></td>
                <td><FormControl name='tuesday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.tuesday} /></td>
                <td><FormControl name='wednesday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.wednesday} /></td>
                <td><FormControl name='thursday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.thursday} /></td>
                <td><FormControl name='friday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.friday} /></td>
                <td><FormControl name='saturday' type='time' onClick={this.handleInputChange.bind(this)}
                  onChange={this.handleInputChange.bind(this)} value={this.state.saturday} /></td>
                <td><Button onClick={this.updateSchedule.bind(this)}>Confirm</Button></td>
              </tr>
            )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

Schedule.contextTypes = {
  store: React.PropTypes.object
};

var mapStateToProps = function(state) {
  return {
    schedule: state.schedule.list
  };
};

var matchDispatchToProps = function(dispatch) {
  return bindActionCreators({ }, dispatch);
  //WE SEEM NOT TO NEED THIS?  DON'T HAVE IT FOR ALL FUNCS BUT
  //THEY STILL FIRE
};

export default connect(mapStateToProps, matchDispatchToProps)(Schedule);

