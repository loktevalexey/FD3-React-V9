const React=require('react');

require('./VotesBlock.css');

const VotesQuestion=require('./VotesQuestion');
const VotesAnswer=require('./VotesAnswer');

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

module.exports=VotesBlock;
