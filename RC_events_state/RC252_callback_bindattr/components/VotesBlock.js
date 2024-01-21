import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  freeAnswerTextChanged = (fat) => {
    console.log('VotesBlock: текст свободного ответа изменён - '+fat);
  };

  render() {

    const answersCode=this.props.answers.map( v =>
      <VotesAnswer key={v.code}
        text={v.text} count={v.count} code={v.code}
        freeanswer={v.freeanswer}
        cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        workMode={this.props.workMode}
      />
    );

    return (
      <div className='VotesBlock'>
        <VotesQuestion question={this.props.question}/>
        <div className='Answers'>{answersCode}</div>
      </div>
    );

  }

}

export default VotesBlock;
