import React from 'react';
import useSWR from "swr";

import MobileClient from './MobileClient';

import './MobileCompany.css';

async function mobileCompanyDataFetcher() {
  const response=await fetch("http://fe.it-academy.by/TestFetch.php", {
    method: 'post',
    headers: {
      "Accept": "application/json",
    },
  });
  if ( !response.ok ) {
    throw new Error("fetch error " + response.status);
  }
  return response.json();
};


function MobileCompany() {

  const { data, error, isLoading } = useSWR(
    "mobile_company", // здесь некий уникальный идентификатор данных, часто здесь указывают УРЛ откуда загружаются данные
    mobileCompanyDataFetcher // функция, возвращающая промис, резолвящийся в полезные данные
  );  

  if ( error ) {
    return <div>Ошибка: {error}</div>;
  }

  if ( isLoading ) {
    return <div>загрузка данных...</div>;
  }

  const clientsCode=data.clientsArr.map( client =>
    <MobileClient key={client.id} info={client}  />
  );

  return (
    <div className='MobileCompany'>
      <div className='MobileCompanyName'>Компания &laquo;{data.companyName}&raquo;</div>
      <div className='MobileCompanyClients'>
        {clientsCode}
      </div>
    </div>
  )
  ;


}

export default MobileCompany;
