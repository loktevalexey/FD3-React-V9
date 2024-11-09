import React, { useState, useCallback } from 'react';

export function useChronometr() {

    const [timer,setTimer]=useState(0);
    const [seconds,setSeconds]=useState(0);

    const tick = () => {
        // аргументом передаём функцию
        // чтобы избежать проблем с замыканиями
        setSeconds( old => old+1 );
    }

    const start = useCallback(() => {
        if ( !timer ) {
            setSeconds(0);
            // важно вызвать какую-нибудь set-функцию
            // это вызовет рендер компонента который пользуется этим хуком
            setTimer( setInterval(tick,1000) );
        }
    },[timer]);

    const stop = useCallback(() => {
        if ( timer ) {
            clearInterval(timer);
            setTimer(0);
        }
    },[timer]);

    return { start, stop, state: !!timer, seconds };
}
