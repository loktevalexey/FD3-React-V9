import React, { useState } from 'react';

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

export default props => {

  console.log("render MobileCompany");

  const [clients,setClients]=useState(props.clients);

  function sidorov() {
    let newClients=clients.slice();
    newClients.forEach( (client,index) => {
      if ( client.id===105 ) {
        let newClient={...client,balance:client.balance+1};
        newClients[index]=newClient;
      }
    } );
    setClients(newClients);
  }

  return (
    <div className="MobileCompany">
      {
        clients.map( client => <MobileClient key={client.id} fio={client.fio} balance={client.balance} /> )
      }
      <input type="button" value="Сидоров++" onClick={sidorov} />
    </div>
  );
};
