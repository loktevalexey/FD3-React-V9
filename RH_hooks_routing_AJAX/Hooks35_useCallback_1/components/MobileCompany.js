import React, { useState } from 'react';

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

export default props => {

  console.log("render MobileCompany");

  const [clients,setClients]=useState(props.clients);

  function changeBalance(clientId,delta) {
    let newClients=clients.slice();
    newClients.forEach( (client,index) => {
      if ( client.id===clientId ) {
        const newClient={...client,balance:client.balance+delta};
        newClients[index]=newClient;
      }
    } );
    setClients(newClients);
  }

  return (
    <div className="MobileCompany">
      {
        clients.map( client => <MobileClient key={client.id} 
          id={client.id} 
          fio={client.fio} balance={client.balance} 
          cbChangeBalance={changeBalance}
          /> )
      }
    </div>
  );
};
