import React from 'react';

import './VotesAnswer.css';

export type VotesAnswerDataType = {
  code: number;
  text: string;
  count: number;
};

const VotesAnswer = ({count,text}:VotesAnswerDataType) => {

    return (
      <div className='VotesBlockAnswer'>
        <span className='Count'>{count}</span>
        <span className='Text'>{text}</span>
      </div>
    );

}

export default VotesAnswer;
