import React from 'react';

import './VotesAnswer.css';

class VotesAnswer extends React.Component {

  freeAnswerTextChanged = eo => {
    console.log('VotesAnswer: текст свободного ответа изменён - '+eo.target.value);
    this.props.cbFreeAnswerTextChanged(eo.target.value);
  };

  render() {

    if ( this.props.workMode==1 ) {
      return (
        <div>
          <label className='VotesBlockAnswer'>
            <input type='radio' value={this.props.code} name='voteanswer' />
            <span>{this.props.text}</span>
            {
              (this.props.freeanswer) &&
              <input type='text' name='votefreeanswer' className='FreeAnswer'
                defaultValue="???" onChange={this.freeAnswerTextChanged} />
            }
          </label>
        </div>
      )
    }
    else {
      return (
        <div className='VotesBlockAnswer'>
          <span className='Count'>{this.props.count}</span>
          <span className='Text'>{this.props.text}</span>
        </div>
      );
    }

  }

}

export default VotesAnswer;
