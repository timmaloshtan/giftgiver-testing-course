import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

import Gift from './Gift';

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

  removeGift = (id) => {
    const { gifts } = this.state;

    this.setState({
      gifts: gifts.filter(gift => gift.id !== id)
    });
  }

  render() {
    return (
      <div className="app">
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => (
              <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />
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