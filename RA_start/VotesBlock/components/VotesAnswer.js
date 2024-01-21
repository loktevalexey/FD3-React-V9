import React from 'react';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  render() {

    return (
      <div className='VotesBlockAnswer'>
        <span className='Count'>{this.props.count}</span>
        <span className='Text'>{this.props.text}</span>
      </div>
    );

  }

}

export default VotesAnswer;
