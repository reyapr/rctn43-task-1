import React from 'react';
import ViewNumber from '../atoms/ViewNumber';
import PropTypes from 'prop-types';

class TopSection extends React.Component {
  render() {
    return (
      <div>
        <div>Amount: {this.props.amount}, digit: {this.props.amount.length}</div>
        <ViewNumber number={this.props.number} />
        <button onClick={this.props.increment} >INCREMENT </button>
        <button onClick={this.props.decrement}>DECREMENT</button>
      </div>
    )
  }
}

TopSection.propTypes = {
  amount: PropTypes.string
}

export default TopSection;