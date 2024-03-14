import React from 'react';

import VotesBlock from './components/VotesBlock';

import answersArr from './answers.json';

const questionText='Как вы относитесь к программированию?';
const defaultFreeAnswerText="???";

function App() {
  return (
    <VotesBlock 
      question={questionText}
      startAnswers={answersArr}
      deffreeanswertext={defaultFreeAnswerText}
      startWorkMode="VOTE"
      />
  );
}

export default App;
