import React, { useState, useMemo } from 'react';

import MobileClient from "./MobileClient";

import "./MobileCompany.css";

export default props => {

  console.log("render MobileCompany");

  const [companyName,setCompanyName] = useState("МТС");
  const [clients,setClients]=useState(props.clients);

  const clientsMemoizeed=useMemo(
    () => clients.map( client => 
        <MobileClient key={client.id} fio={client.fio} balance={client.balance} /> ),
    [clients]
  );

/*
а вот так хуки не работают:
for ( let i=0; i>clients.length; i++ ) {
  const client=clients[i];
  const clientMemoizeed=useMemo(
    () => <MobileClient key={client.id} fio={client.fio} balance={client.balance} />,
    [client.id,client.fio,client.balance]
  );
  ...
}
*/

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
      <div>
        <b>Компания: {companyName}</b><br/>
        <input type="button" value="МТС" onClick={ ()=>setCompanyName("МТС") } />
        <input type="button" value="A1" onClick={ ()=>setCompanyName("A1") } />
      </div>
      { clientsMemoizeed }
      <input type="button" value="Сидоров++" onClick={sidorov} />
    </div>
  );
};
