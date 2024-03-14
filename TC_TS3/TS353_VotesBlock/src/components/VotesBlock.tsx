import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer, {VotesAnswerDataType} from './VotesAnswer';

type VotesBlockPropTypes = {
  answers: Array<VotesAnswerDataType>;
  question: string;
};

const VotesBlock = ({answers,question}:VotesBlockPropTypes) => {

  const answersCode=answers.map( v =>
    <VotesAnswer key={v.code} text={v.text} count={v.count} code={v.code} />
  );

  return (
    <div className='VotesBlock'>
      <VotesQuestion question={question}/>
      <div className='Answers'>{answersCode}</div>
    </div>
  );

}

export default VotesBlock;
