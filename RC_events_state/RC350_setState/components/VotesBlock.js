import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  state = {
    freeanswertext:this.props.deffreeanswertext,
    workMode:this.props.startWorkMode,
    cnt: 0,
  };

  freeAnswerTextChanged = (fat) => {
    console.log('VotesBlock: текст свободного ответа изменён - '+fat);
    this.setState( {freeanswertext:fat} );
  };

  cntPlus3 = () => {
    this.setState({cnt:this.state.cnt+3});

    // this.setState({cnt:this.state.cnt+1});
    // this.setState({cnt:this.state.cnt+1});
    // this.setState({cnt:this.state.cnt+1});

    // this.setState( (prevState, props) => { return {cnt:prevState.cnt+1}; } );
    // this.setState( (prevState, props) => { return {cnt:prevState.cnt+1}; } );
    // this.setState( (prevState, props) => { return {cnt:prevState.cnt+1}; } );
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
        <div>{this.state.freeanswertext+" "+this.state.cnt}</div>
        <input type="button" value="+=3" onClick={this.cntPlus3} />
      </div>
    );

  }

}

export default VotesBlock;
