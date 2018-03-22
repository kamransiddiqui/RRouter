import React, {Component} from 'react';

class Debits extends Component {
  render() {
    return (
        <div>
          <h1>Debits</h1>

          <div>Username: {this.props.userName}</div>
          <div>Balance: {this.props.balance}</div>
          <div>Description: {this.props.description}</div>
          <div>Date: {this.props.date}</div>
        </div>
    );
  }
}

export default Debits;