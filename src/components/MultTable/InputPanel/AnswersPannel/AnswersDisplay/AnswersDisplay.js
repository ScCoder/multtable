import React from 'react';
import s from './AnswersDisplay.module.css';

const AnswersDisplay = ({title,answers,isWrong}) => {
  
    const answersElements = answers.map((answ,i) => <div key={i}>{answ}</div>)
  
    return <React.Fragment>
      <div className={s.wrapper}>
        <div className={s.title}>{title}</div>
        <div className={isWrong?s.body_wrong:s.body}>
          {answersElements}
        </div>
      </div>
    </React.Fragment>
  }

  export default AnswersDisplay;