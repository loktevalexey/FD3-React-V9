import React from 'react';

import { Third } from "./Third";

export const Second = React.memo(() => {

  console.log("render Second component");

  return (
    <Third/>
  );

});
