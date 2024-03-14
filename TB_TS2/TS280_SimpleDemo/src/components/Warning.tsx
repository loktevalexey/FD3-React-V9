import React from 'react';

import './Warning.css';

type WarningProps = {
  question: string;
};

export const Warning = ({question}:WarningProps) => {

  return (
    <div className='Warning'>
      <span className='Warning_Text'>
        {question}
      </span>
    </div>
    );

};
