import React, { Component } from 'react';
import { Form, FormLabel, FormControl } from 'react-bootstrap';

class Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      present: '',
    };
  }

  handlePersonChange = (e) => {
    this.setState({
      person: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <Form>
          <FormLabel>Person</FormLabel>
          <FormControl
            className="input-person"
            onChange={this.handlePersonChange}
          />
        </Form>
      </div>
    );
  }
}

export default Gift;