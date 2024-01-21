import React from 'react';

import './VotesQuestion.css';

const VotesQuestion = ({question}:{question:string}) => {

    return <div className='VotesQuestion'>{question}</div>;

};

export default VotesQuestion;
