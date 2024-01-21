import React, { useState, useEffect } from 'react';

import "./Counter.css";

export default props => {

  const [cnt, setCnt] = useState(0);
  console.log("render cnt",cnt);

  useEffect(
    ()=>{
      console.log("useEffect cnt",cnt);
      //const timer=setInterval(()=>setCnt(prevCnt=>prevCnt+1),1000);
      const timer=setInterval(()=>setCnt(cnt+1),1000);
      // const timer=setInterval(()=>{
      //   console.log("timer cnt",cnt);
      //   setCnt(cnt+1);
      // },1000);
      console.log("таймер запущен");
      return ()=>{
        clearTimeout(timer);
        console.log("таймер остановлен");
        // раз что-то возвращается из этой функции, значит, это - функция очистки эффекта, то что нужно выполнить при размонтировании компонента
      };
    },
    [] // массив зависимостей пуст - функция выполнится один раз, при монтировании компонента
  );

  return (
    <div>
      Счётчик: {cnt}
    </div>
  );
};
