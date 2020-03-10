import React from 'react';
import s from './Display.module.css';

const Display = ({gameActive,startGame,a,b,result,answers,batteryCount}) => {

    const SatatusItems = Object.keys(answers).map(answKey => <div key={answKey}
      className={s.status_item + ' ' + ((answers[answKey].isCorrect === null) ? s.status_item_none : (answers[answKey].isCorrect) ? s.status_item_ok : s.status_item_failed)} >
      {answKey}</div>)
  
    return (
      <div className={s.display}>
        <div className={s.status_panel}>
          {SatatusItems}
        </div>
        <div className = {s.battery_count}>{batteryCount}</div>
        <div className={s.main_panel}> {gameActive ? `${a}x${b}=${result}` : <button className={s.main_panel_button} onClick={startGame}>Начать!</button>} </div>
      </div>
    )
  }
  export default Display;