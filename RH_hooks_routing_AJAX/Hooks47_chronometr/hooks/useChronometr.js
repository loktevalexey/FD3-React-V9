import React, { useState, useCallback } from 'react';

export function useChronometr() {

    const [timer,setTimer]=useState(0);
    const [seconds,setSeconds]=useState(0);

    const tick = useCallback(() => {
        // аргументом передаём функцию
        // чтобы избежать проблем с замыканиями
        setSeconds( old => old+1 );
    },[]);

    // в данном примере резона нет, но можно завернуть в useCallback
    // в массиве зависимостей придётся упомянуть timer
    function start() {
        if ( !timer ) {
            setSeconds(0);
            // важно вызвать какую-нибудь set-функцию
            // это вызовет рендер компонента который пользуется этим хуком
            setTimer( setInterval(tick,1000) );
        }
    }

    function stop() {
        if ( timer ) {
            clearInterval(timer);
            setTimer(0);
        }
    }

    return { start, stop, state: !!timer, seconds }
}
