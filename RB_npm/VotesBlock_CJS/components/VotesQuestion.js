const React=require('react');
const PropTypes=require('prop-types');

require('./VotesQuestion.css');

class VotesQuestion extends React.Component {

  static propTypes = {
    question: PropTypes.string.isRequired,
  };
  
  render() {
    return <div className='VotesQuestion'>{this.props.question}</div>;
  }

}

module.exports=VotesQuestion;
