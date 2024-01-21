import React, { FC } from 'react';

import './VotesQuestion.css';

type VotesQuestionPropType = {
  question:string;
}

const VotesQuestion:FC<VotesQuestionPropType> = ({question}) => {
    return <div className='VotesQuestion'>{question}</div>;
};

export default VotesQuestion;
