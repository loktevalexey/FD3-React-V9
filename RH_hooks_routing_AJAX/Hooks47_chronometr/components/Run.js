import React from 'react';

import { useChronometr } from "../hooks/useChronometr";

export default props => {

  const { start, stop, state, seconds } = useChronometr();

  return (
    <div>
      состояние секундомера: {state?("идёт "+seconds):"остановлен"}<br/>
      <input type="button" value="старт" onClick={start}/>
      <input type="button" value="стоп" onClick={stop}/>
    </div>
  );
};
