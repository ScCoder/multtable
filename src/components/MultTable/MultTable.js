import React, {useState,useEffect} from 'react';

import InputPanel from './InputPanel/InputPanel';
import Display from './Display/Display';
import {questionsApi,profileApi} from '../../api/api';

const getRandomArbitary= (min, max)=>
{
  return Math.round(Math.random() * (max - min) + min);
}


const MultTable = ({difficultyLevel,batteryCount,incBatteryCount}) => {

  const [questions,SetQuestions] = useState([]);

  const [a,SetA] = useState(2)
  const [b,SetB] = useState(4)
  const [result,SetResult] = useState(8)
  
  const initialAnswers = {1:{A:2,B:2,isCorrect:null},2:{A:2,B:2,isCorrect:null},3:{A:2,B:2,isCorrect:null},4:{A:2,B:2,isCorrect:null}
    ,5:{A:2,B:2,isCorrect:null},6:{A:2,B:2,isCorrect:null},7:{A:2,B:2,isCorrect:null},8:{A:2,B:2,isCorrect:null},9:{A:2,B:2,isCorrect:null},10:{A:2,B:2,isCorrect:null}}
  const [answers,SetAnswers] = useState(initialAnswers)

  const [currentAnswer,SetCurrentAnswer] = useState(1)
  const [gameActive,setGameActive] = useState(false)
  const [goodAnswers,setGoodAnswers] = useState([]);
  const [wrongAnswers,setWrongAnswers] = useState([]);

  const [batteryCharge,setBatteryCharge] = useState(0);

  useEffect( ()=>{
    if (!gameActive){
     
      if (answers[10].isCorrect != null){
        questionsApi.saveQuestionsStats(answers);
      }
    
      SetQuestions(questionsApi.getQuestions()) 
    

      
    }
  },[gameActive,answers]);

  const updateCharge = () => {
    if ((batteryCharge + 10) === 100) {
      incBatteryCount();
      setBatteryCharge(0)
    }
    else {
      setBatteryCharge(batteryCharge + 10)
    }
  }
  

  const ApplayAnswer = (isCorrect) => {

    const str = `${a}x${b}=${result}`;

    const newAnswers = { ...answers }

    newAnswers[currentAnswer] = { A: a, B: b, isCorrect }

    SetAnswers(newAnswers)

    const nextAnswer = currentAnswer + 1

    if (isCorrect) {

      setGoodAnswers([...goodAnswers, str])

      updateCharge()

    } else {

      setWrongAnswers([...wrongAnswers, str])

      setBatteryCharge(0)

    }

    SetCurrentAnswer(nextAnswer)

    if (currentAnswer == 10) {

      setGameActive(false);

    } else {

      if (isCorrect) {

        SetNewOperands(nextAnswer)
      }
    }
  }

  const SetNewOperands = (currentAnswer) =>{

    if (getRandomArbitary(0, 1)) {

      SetA(questions[currentAnswer-1].A)
      SetB(questions[currentAnswer-1].B) 
    } else {
      SetA(questions[currentAnswer-1].B)
      SetB(questions[currentAnswer-1].A) 
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
    SetCurrentAnswer(1)
    SetNewOperands(1)    
    SetAnswers(initialAnswers)    
    SetResult('')
    setGameActive(true)
    setWrongAnswers([])
    setGoodAnswers([])
  }


  return (
    <div className='mult-table'>
      <Display gameActive={gameActive} startGame = {startGame} a={a} b={b} result={result} answers={answers} batteryCount={batteryCount}/>
      <InputPanel wrongAnswers = {wrongAnswers} goodAnswers = {goodAnswers} batteryCount={batteryCount} batteryCharge={batteryCharge} onKeyClicked={onKeyClicked}/>     
    </div>

  )
}




export default MultTable;

