import React, { FC, ChangeEvent } from 'react';

import './VotesAnswer.css';

import { WorkMode } from './VotesBlock';

export type VotesAnswerDataType = {
  code: number;
  text: string;
  count: number;
  freeanswer?: boolean; // необязательный
};

interface VotesAnswerPropType extends VotesAnswerDataType {
  freeanswertext: string;
  selectedAnswerCode: number;
  workMode: WorkMode;
  cbSelected: (code:number)=>void;
  cbFreeAnswerTextChanged: (fat:string)=>void;
};

const VotesAnswer:FC<VotesAnswerPropType> = ({
  code,text,count,freeanswer,freeanswertext,
  selectedAnswerCode,workMode,
  cbSelected,cbFreeAnswerTextChanged
}) => {

  const answerClicked = () => {
    cbSelected(code);
  };

  const freeAnswerTextChanged = (eo:ChangeEvent<HTMLInputElement>) => {
    cbFreeAnswerTextChanged(eo.target.value);
  };

  if ( workMode==="VOTE" ) {
    return (
      <div>
        <label className='VotesBlockAnswer'>
          <input type='radio' value={code} name='voteanswer'
            checked={selectedAnswerCode===code}
            onChange={answerClicked}
          />
          <span>{text}</span>
          {
            (freeanswer) &&
            <input type='text' name='votefreeanswer' className='FreeAnswer'
              value={freeanswertext} onChange={freeAnswerTextChanged}
              disabled={selectedAnswerCode!==code}
            />
          }
        </label>
      </div>
    )
  }
  else {
    return (
      <div className='VotesBlockAnswer'>
        <span className='Count'>{count}</span>
        <span className='Text'>{text}</span>
      </div>
    );
  }

};

export default VotesAnswer;
