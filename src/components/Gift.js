import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

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

  handlePresentChange = (e) => {
    this.setState({
      present: e.target.value,
    });
  }

  render() {
    const { removeGift, gift } = this.props;
    return (
      <div className="gift">
        <Form>
          <FormGroup className="gift__form-group">
            <FormLabel>Person</FormLabel>
            <FormControl
              className="input-person"
              onChange={this.handlePersonChange}
            />
          </FormGroup>
          <FormGroup className="gift__form-group">
            <FormLabel>Present</FormLabel>
            <FormControl
              className="input-present"
              onChange={this.handlePresentChange}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => removeGift(gift.id)}
        >
          x
        </Button>
      </div>
    );
  }
}

export default Gift;