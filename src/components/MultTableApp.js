import React,{useEffect,useState} from 'react';
import MultTable from './MultTable/MultTable';
import {user} from '../api/api';


const MultTableApp = () => {

  const [difficultyLevel,setDifficultyLevel] = useState(0);
  const [batteryCount,setBatteryCount] = useState(0);

  useEffect(()=>{

    user.getUserData().then( data =>{
      if (data.resultCode===0){
        setBatteryCount(data.data.batteryCount);
        setDifficultyLevel(data.data.difficultyLevel);
      }
    })
    
  },[])

  const incBatteryCount = () =>{
    const newBatteryCount = batteryCount + 1;
    setBatteryCount(newBatteryCount);
    user.saveUserData(newBatteryCount);
  }


    return(
        <React.Fragment>
         <div className = 'page' >
           <header className = 'header'>Тренажер таблицы умножения</header>
           <MultTable difficultyLevel={difficultyLevel} batteryCount = {batteryCount} incBatteryCount = {incBatteryCount}/>
           <div className = 'profile'>
            
             {<img className = 'profile__img' src='http://wowwee.ru/i/robosapien_1.jpg'/> }
            </div>
           <footer className = 'footer'>У тебя все получится!</footer>
         </div> 
      </React.Fragment>

    )
}

export default MultTableApp;