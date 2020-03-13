import React from 'react';
import s from './InputPanel.module.css';
import KeyBoard from './KeyBoard/KeyBoard';
import AnswersPannel from './AnswersPannel/AnswersPannel';

const InputPanel = ({wrongAnswers,goodAnswers,batteryCount,batteryCharge,onKeyClicked}) => {
    return (
      <div className={s.wrapper}>
        <div className={s.left_panel}>
         <AnswersPannel wrongAnswers = {wrongAnswers} goodAnswers={goodAnswers}/>
        </div>
        <div className={s.center_panel}>
          <KeyBoard onKeyClicked={onKeyClicked}/>
        </div>
        <div className={s.right_panel}>          
        </div>
      </div>
    )
  }
  
  export default InputPanel;