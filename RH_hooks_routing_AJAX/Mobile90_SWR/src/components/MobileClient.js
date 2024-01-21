import React from 'react';

import './MobileClient.css';

function MobileClient({info}) {

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>{info.balance}</span>
      <span className='MobileClientFIO'>{info.fio}</span>
    </div>
  );

}

export default MobileClient;
