import React, {useEffect, useState} from 'react';

import { ColorFrame } from "./ColorFrame";

/*
загружать через AJAX будем вот такой JSON:
{
    "companyName": "МТС",
    "clientsArr": [
        {
            "id": 101,
            "fio": "Иванов И.И.",
            "balance": 200
        },
        ...
    ]
}
*/

type ClientType = {
  id: number;
  fio: string;
  balance: number;
}

type CompanyType = {
  companyName: string;
  clientsArr: Array<ClientType>;
}

async function downloadData():Promise<CompanyType> {
  const response=await fetch("http://fe.it-academy.by/TestFetch.php", {
    method: 'post',
    headers: {
      "Accept": "application/json",
    },
  });
  // в response - http-ответ
  if ( !response.ok ) {
    throw new Error("HTTP error "+response.status);
  }
  else {
    const data:CompanyType=await response.json();
    // в data - пришедшие в ответе данные
    return data;
  }  
}

enum DownloadStatus { START, LOADING, LOADED, ERROR };

export const CompanyInfo = () => {

  const [downloadStatus,setDownloadStatus] = useState(DownloadStatus.START);
  const [companyData,setCompanyData] = useState<CompanyType|null>(null);

  useEffect( ()=>{

    (async ()=>{
      try {
        setDownloadStatus(DownloadStatus.LOADING);
        const companyData=await downloadData();
        setCompanyData(companyData);
        setDownloadStatus(DownloadStatus.LOADED);
      }
      catch ( err ) {
        setDownloadStatus(DownloadStatus.ERROR);
      }
    })();

  },[]);

  return (
    //<ColorFrame>
      <div>
        { downloadStatus===DownloadStatus.LOADING && "Загрузка данных..." }
        { downloadStatus===DownloadStatus.ERROR && "ОШИБКА!" }
        {
          (downloadStatus===DownloadStatus.LOADED) && companyData &&
          <div>
            Компания: {companyData.companyName}<br/>
            Клиенты:
            <ul>
              {
                companyData.clientsArr.map( clientData => (
                  <li key={clientData.id}>
                    ФИО: {clientData.fio} баланс: {clientData.balance}
                  </li>
                ) )
              }
            </ul>
          </div>
        }
      </div>
    //</ColorFrame>
    );

};
