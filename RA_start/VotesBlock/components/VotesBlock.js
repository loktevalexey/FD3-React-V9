import React from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer from './VotesAnswer';

class VotesBlock extends React.Component {

  render() {

    const answersCode=this.props.answers.map( v =>
      <VotesAnswer key={v.code} text={v.text} count={v.count} code={v.code} />
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
