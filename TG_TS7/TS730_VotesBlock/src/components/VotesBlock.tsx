import React, {FC, useState, ReactElement, ReactNode} from 'react';

import './VotesBlock.css';

import VotesQuestion from './VotesQuestion';
import VotesAnswer, {VotesAnswerDataType} from './VotesAnswer';

export type WorkMode = "VOTE" | "RESULTS";

type VotesBlockPropTypes = {
  startAnswers: Array<VotesAnswerDataType>;
  question: string;
  deffreeanswertext: string;
  startWorkMode: WorkMode;
};

const VotesBlock:FC<VotesBlockPropTypes> = ({startAnswers,question,deffreeanswertext,startWorkMode}) => {

  const [selectedAnswerCode,setSelectedAnswerCode] = useState<number>(0); // параметризовать useState необязательно в данном случае, т.к. то значение что мы передали как начальое значение стейта имеет как раз нужный нам тип
  const [freeanswertext,setFreeanswertext] = useState(deffreeanswertext);
  const [workMode,setWorkMode]=useState(startWorkMode);
  const [answers,setAnswers]=useState(startAnswers);

  const answerSelected = (code:number) => {
    console.log('выбран ответ с кодом '+code);
    setSelectedAnswerCode(code);
  };

  const vote = () => {
    console.log('голосование завершено, выбран ответ с кодом '+selectedAnswerCode);
    const newAnswers:Array<VotesAnswerDataType>=JSON.parse(JSON.stringify(answers)); // JSON.parse возвращает any, поэтому явно типизируем переменную куда помещается результат
    newAnswers.forEach( (answer:VotesAnswerDataType) => {
      if ( answer.code===selectedAnswerCode )
          answer.count++;
    } );
    setAnswers(newAnswers);
    setWorkMode("RESULTS");
  };

  const freeAnswerTextChanged = (fat:string) => {
    console.log('VotesBlock: текст свободного ответа изменён - '+fat);
    setFreeanswertext(fat);
  };

  // тип ReactElement - объект, описывающий React-тег или компонент, т.е. кусок VDOM
  // тип JSX.Element - примерно то же самое
  // тип ReactNode - всё что может рендерить React, т.е.:
  //   ReactElement | ReactFragment | string | number | null | undefined | boolean
  //   либо массив элементов этих же типов

  const answersCode:ReactElement[]=answers.map( v =>
    <VotesAnswer key={v.code}
      text={v.text} count={v.count} code={v.code}
      freeanswer={v.freeanswer} freeanswertext={freeanswertext}
      cbSelected={answerSelected}
      cbFreeAnswerTextChanged={freeAnswerTextChanged}
      selectedAnswerCode={selectedAnswerCode}
      workMode={workMode}
    />
  );
  
  return (
    <div className='VotesBlock'>
      <VotesQuestion question={question}/>
      <div className='Answers'>{answersCode}</div>
      {
        ((workMode==="VOTE")&&(selectedAnswerCode)!==0) &&
        <input type='button' value='проголосовать' onClick={vote} />
      }
    </div>
  );

}

export default VotesBlock;
