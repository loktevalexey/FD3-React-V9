import React from 'react';

import VotesBlock from './components/VotesBlock';

import answersArr from './answers.json';

const questionText='Как вы относитесь к программированию?';

function App() {
  return (
    <VotesBlock 
      question={questionText}
      answers={answersArr}
    />
  );
}

export default App;
