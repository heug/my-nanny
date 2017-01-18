import React from 'react';
import { Collapse, Button, Well, Row, Col, FormGroup, FormControl } from 'react-bootstrap';

class ChoreForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Button onClick={()=> this.setState({ open: !this.state.open })}>
          New Chore
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <Row>
                <Col md={6}>
                  <form>
                    <FormGroup>
                      <FormControl type='text' name='chore' placeholder='Chore'
                        onChange={this.props.handleInputChange.bind(this)}>
                      </FormControl>
                      {' '}
                      <FormControl type='text' name='details' placeholder='Details'
                        onChange={this.props.handleInputChange.bind(this)}>
                      </FormControl>
                      {' '}
                      <Row>
                        <Col md={6}>
                          <FormControl type='date' name='date' 
                            onChange={this.props.handleInputChange.bind(this)}>
                          </FormControl>
                        </Col>
                      </Row>
                      {' '}
                      <Button className='btn btn-default' 
                        onClick={this.props.addChore}>
                        Add Chore
                      </Button>
                    </FormGroup>
                  </form>
                </Col>
              </Row>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ChoreForm;

