import React, {useState} from 'react';

import InputPanel from './InputPanel/InputPanel';
import Display from './Display/Display';


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
      <Display gameActive={gameActive} startGame = {startGame} a={a} b={b} result={result} answers={answers}/>
      <InputPanel wrongAnswers = {wrongAnswers} goodAnswers = {goodAnswers} batteryCount={batteryCount} batteryCharge={batteryCharge} onKeyClicked={onKeyClicked}/>     
    </div>

  )
}




export default MultTable;

