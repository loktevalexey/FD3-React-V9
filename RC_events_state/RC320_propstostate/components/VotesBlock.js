import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  state = {
    freeanswertext:this.props.deffreeanswertext,
    workMode:this.props.startWorkMode,
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
        cbFreeAnswerTextChanged={this.freeAnswerTextChanged}
        workMode={this.state.workMode}
      />
    );

    return (
      <div className='VotesBlock'>
        <VotesQuestion question={this.props.question}/>
        <div className='Answers'>{answersCode}</div>
        <div>{this.state.freeanswertext}</div>
      </div>
    );

  }

}

export default VotesBlock;
