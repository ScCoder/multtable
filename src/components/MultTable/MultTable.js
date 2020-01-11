import React, {useState} from 'react';
import batteryImg from '../../img/battery.png';


const getRandomArbitary= (min, max)=>
{
  return Math.round(Math.random() * (max - min) + min);
}


const MultTable = ({difficultyLevel,batteryCount,incBatteryCount}) => {

  const [a,SetA] = useState(2)
  const [b,SetB] = useState(4)
  const [result,SetResult] = useState(8)
  
  const initialAnswers = {1:null,2:null,3:null,4:null,5:null,6:null,7:null,8:null,9:null,10:null}
  const [answers,SetAnswers] = useState(initialAnswers)

  const [currentAnswer,SetCurrentAnswer] = useState(1)
  const [gameActive,setGameActive] = useState(false)
  const [goodAnswers,setGoodAnswers] = useState([]);
  const [wrongAnswers,setWrongAnswers] = useState([]);

  const [batteryCharge,setBatteryCharge] = useState(0);


  const updateCharge = () => {
    if ((batteryCharge + 10) == 100) {
      incBatteryCount();
      setBatteryCharge(0)
    }
    else {
      setBatteryCharge(batteryCharge + 10)
    }
  }
  

  const ApplayAnswer = (isCorrect) => {

    const str = `${a}x${b}=${result}`;

    if (isCorrect) {
      setGoodAnswers([...goodAnswers,str])
      updateCharge()
      SetNewOperands()      
    } else {
      setWrongAnswers([...wrongAnswers,str])
      setBatteryCharge(0)
    }

    const newAnswers = { ...answers }
    newAnswers[currentAnswer] = isCorrect
    SetAnswers(newAnswers)

    SetCurrentAnswer(currentAnswer + 1)
    if (currentAnswer == 10) {
      setGameActive(false);
    }
  }

  const SetNewOperands = () =>{

    if (getRandomArbitary(0, 1)) {
      SetA(getRandomArbitary(2, difficultyLevel))
      SetB(getRandomArbitary(2, 9)) 
    } else {
      SetA(getRandomArbitary(2, 9))
      SetB(getRandomArbitary(2, difficultyLevel)) 
    }  
  }



  const onKeyClicked = (val) => {
    if (!gameActive) { return; }
    switch (val) {
      case 'Ok':
        ApplayAnswer((a * b == result));
        SetResult('');
        break
      case 'del':
        SetResult('')
        break
      default:
        SetResult(result + val)
    }
  }

  const startGame = () =>{
    SetAnswers(initialAnswers)
    SetCurrentAnswer(1)
    SetResult('');
    setGameActive(true);
    setWrongAnswers([]);
    setGoodAnswers([]);
  }


  return (
    <div className='mult-table'>
      <Dysplay gameActive={gameActive} startGame = {startGame} a={a} b={b} result={result} answers={answers}/>
      <InputPanel wrongAnswers = {wrongAnswers} goodAnswers = {goodAnswers} batteryCount={batteryCount} batteryCharge={batteryCharge} onKeyClicked={onKeyClicked}/>     
    </div>

  )
}

const InputPanel = ({wrongAnswers,goodAnswers,batteryCount,batteryCharge,onKeyClicked}) => {

  
  return (
    <div className='input-panel'>
      <div className='input-panel__left-panel'>
        <AnswersDispaly title='Ошибочные ответы:' answers={wrongAnswers} isWrong={true} />
        <AnswersDispaly title='Правильные ответы:' answers={goodAnswers} isWrong={false} />
      </div>
      <div className='input-panel__center-panel'>
        <KeyBoard onKeyClicked={onKeyClicked}/>
      </div>
      <div className='input-panel__right-panel'>
        <BatteryPanel batteryCount={batteryCount} batteryCharge={batteryCharge} />
      </div>
    </div>
  )
}

const KeyBoard = ({ onKeyClicked }) => {

  const onButtonCkicked = (e) => {
    const val = e.target.value;
    onKeyClicked(val);
  }

  const inputChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'del', '0', 'Ok']

  const InputElements = inputChars.map(ch => <button key={ch} className='input-panel__button' onClick={onButtonCkicked} value={ch}>{ch}</button>)

  return (
    <React.Fragment>
      {InputElements}
    </React.Fragment>
  )
}


const ChargedBattery = ({ batteryCharge }) => {

  const createBatary = () => {

    let result = [];
    for (let i = 90; i >= 0; i = i - 10) {
      if (i < batteryCharge) {
        result.push(<div key={i} className='charged-battery__charged-element'>+</div>);
      }
      else {
        result.push(<div key={i} className='charged-battery__empty-element'>-</div>);
      }
    }
    return result;
  }

  return <div className='charged-battery'>
    {createBatary()}
  </div>

}

const AnswersDispaly = ({title,answers,isWrong}) => {

  const answersElements = answers.map((answ,i) => <div key={i}>{answ}</div>)

  return <React.Fragment>
    <div className='answers-display'>
      <div className='answers-display__title'>{title}</div>
      <div className={isWrong?'answers-display__body-wrong':'answers-display__body'}>
        {answersElements}
      </div>
    </div>
  </React.Fragment>
}

const BatteryPanel = ({batteryCount, batteryCharge}) => {
  return (
    <div className='battery-panel'>
      <div className='battery-panel__top-panel'>
        {batteryCount}<img className='battery-panel__battery-icon' src={batteryImg} />
      </div>
      <div className='battery-panel__body'>
        <ChargedBattery batteryCharge={batteryCharge} />
      </div>
    </div>
  )
}

const Dysplay = ({gameActive,startGame,a,b,result,answers}) => {

  const SatatusItems = Object.keys(answers).map(answKey => <div key={answKey}
    className={('display__status-item') + ' ' + ((answers[answKey] === null) ? 'display__status-item_none' : (answers[answKey]) ? 'display__status-item_ok' : 'display__status-item_failed')} >
    {answKey}</div>)

  return (
    <div className='display'>
      <div className='display__status-panel'>
        {SatatusItems}
      </div>
      <div className='display__main-panel'> {gameActive ? `${a}x${b}=${result}` : <button className='display__main-panel__button' onClick={startGame}>Начать!</button>} </div>
    </div>
  )
}

export default MultTable;

