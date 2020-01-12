import React,{useEffect,useState} from 'react';
import MultTable from './MultTable/MultTable';
import {user} from '../api/api';
import s from './MultTableApp.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';


const MultTableApp = () => {

  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [batteryCount, setBatteryCount] = useState(0);

  useEffect(() => {

    user.getUserData().then(data => {
      if (data.resultCode === 0) {
        setBatteryCount(data.data.batteryCount);
        setDifficultyLevel(data.data.difficultyLevel);
      }
    })

  }, [])

  const incBatteryCount = () => {
    const newBatteryCount = batteryCount + 1;
    setBatteryCount(newBatteryCount);
    user.saveUserData(newBatteryCount);
  }


  return (
    <div className={s.page} >
      <div className={s.header}><Header /></div>
      <div className={s.content}><MultTable difficultyLevel={difficultyLevel} batteryCount={batteryCount} incBatteryCount={incBatteryCount} /></div>
      <div className={s.profile}><Profile/></div>
      <div className={s.footer}><Footer/></div>
    </div>
  )
}

export default MultTableApp;