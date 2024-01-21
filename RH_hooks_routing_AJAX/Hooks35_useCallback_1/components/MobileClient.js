import React, { useMemo } from 'react';

import "./MobileClient.css";

export default React.memo(({id,fio,balance,cbChangeBalance}) => {

  console.log("render MobileClient "+fio);

  return (
    <div className='MobileClient'>
      <span className='MobileClientBalance'>
        {balance}
        <input type="button" value="+1" onClick={()=>cbChangeBalance(id,1)} />
      </span>
      <span className='MobileClientFIO'>{fio}</span>
    </div>
  );
  
});
