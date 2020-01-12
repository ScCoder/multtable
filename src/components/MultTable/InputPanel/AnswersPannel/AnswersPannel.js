import React from 'react';
import AnswersDisplay from './AnswersDisplay/AnswersDisplay';
import s from './AnswersPannel.module.css';

const AnswersPannel = ({wrongAnswers,goodAnswers}) => {
    return (
        <div className = {s.wrapper}>
            <AnswersDisplay title='Ошибочные ответы:' answers={wrongAnswers} isWrong={true} />
            <AnswersDisplay title='Правильные ответы:' answers={goodAnswers} isWrong={false} />
        </div>
    )
}

export default AnswersPannel;