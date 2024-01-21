import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  state = {
    selectedAnswerCode: null,
    freeanswertext:this.props.deffreeanswertext,
    workMode:this.props.startWorkMode,
  };

  answerSelected = (code) => {
    console.log('выбран ответ с кодом '+code);
    this.setState( {selectedAnswerCode:code} );
  };

  freeAnswerTextChanged = (fat) => {
    console.log('VotesBlock: текст свободного ответа изменён - '+fat);
    this.setState( {freeanswertext:fat} );
  };

  render() {

    const answersCode=this.props.answers.map( v =>
      <VotesAnswer key={v.code}
        text={v.text} count={v.count} code={v.code}
        freeanswer={v.freeanswer}
        cbSelected={this.answerSelected}
        cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        workMode={this.state.workMode}
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
