import React from 'react';
import PropTypes from 'prop-types';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    id: PropTypes.number.isRequired,
    FIO:PropTypes.shape({
      fam: PropTypes.string.isRequired,
      im: PropTypes.string.isRequired,
      otch: PropTypes.string.isRequired,
    }),
    balance: PropTypes.number.isRequired,
  };

  render() {

    console.log("MobileClient id="+this.props.id+" render");
    
    return (
      <div className='MobileClient'>
        <span className='MobileClientBalance'>{this.props.balance}</span>
        <span className='MobileClientFIO'>{this.props.FIO.fam+" "+this.props.FIO.im+" "+this.props.FIO.otch}</span>
      </div>
    );

  }

}

export default MobileClient;
