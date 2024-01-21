import React from 'react';
import ReactDOM from 'react-dom';

import VotesBlock from './components/VotesBlock';

const questionText='Как вы относитесь к программированию?';
const defaultFreeAnswerText="???";

import answersArr from './answers.json';

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={answersArr}
    deffreeanswertext={defaultFreeAnswerText}
    startWorkMode={1}
  />
  , document.getElementById('container') 
);
