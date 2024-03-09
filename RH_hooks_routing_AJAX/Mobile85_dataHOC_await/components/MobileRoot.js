import React from 'react';

import MobileCompany from './MobileCompany';
import { withDataLoad } from './withDataLoad';

const fetchConfig={
  URL: "http://fe.it-academy.by/TestFetch.php",
  method: 'post',
  headers: {
      "Accept": "application/json",
  },
};

const MobileCompanyWithData=withDataLoad(fetchConfig,"companyData")(MobileCompany);

class MobileRoot extends React.PureComponent {
  render() {
    return <MobileCompanyWithData /> ;
  }
}

export default MobileRoot;
