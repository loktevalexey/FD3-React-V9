import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

const questionText='Как вы относитесь к программированию?';

import answersArr from './answers.json';

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={answersArr}
    workMode={1}
  />
  , document.getElementById('container') 
);
