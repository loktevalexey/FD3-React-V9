import React, {ReactNode} from 'react';

  // тип ReactElement - объект, описывающий React-тег или компонент, т.е. кусок VDOM
  // тип JSX.Element - примерно то же самое
  // тип ReactNode - всё что может рендерить React, т.е.:
  //   ReactElement | ReactFragment | string | number | null | undefined | boolean
  //   либо массив элементов этих же типов

  export const ColorFrame = (props:{children:ReactNode}) => (
    <div style={{border: "solid blue 2px"}}>
        {props.children}
    </div>
  );
