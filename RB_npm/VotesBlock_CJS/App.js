const React=require('react');
const ReactDOM=require('react-dom');

const VotesBlock=require('./components/VotesBlock');

const questionText='Как вы относитесь к программированию?';

const answersArr=require('./answers.json');

ReactDOM.render(
  <VotesBlock 
    question={questionText}
    answers={answersArr}
  />
  , document.getElementById('container') 
);

