import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    this.setState(prevState => ({
      gifts: [
        ...prevState.gifts,
        {
          id: prevState.gifts.length + 1
        },
      ],
    }));
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => (
              <div key={gift.id}>{gift.id}</div>
            ))
          }
        </div>
        <Button
          className="btn-add"
          onClick={this.addGift}
        >
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;