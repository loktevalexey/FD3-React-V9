import React, { useRef } from 'react';

import "./Bar.css";

export default props => {

  const barRef=useRef(null);
  
  // мы можем использовать useRef чтобы сохранять что-то своё,
  // не вызывая перерендер компонента
  const myRef=useRef(0);

  const measure = () => {
    if ( barRef.current ) {
      console.log("ширина = "+barRef.current.offsetWidth);
      myRef.current++;
      console.log("мы уже меряли раз: "+myRef.current);
    }
  };

  return (
    <div ref={barRef} className="Bar">
      Однажды в студёную зимнюю пору я из лесу вышел был сильный мороз
      <input type="button" value="измерить" onClick={measure} />
    </div>
  );
};
