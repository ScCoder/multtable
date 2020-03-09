import React,{useEffect,useState} from 'react';
import MultTable from './MultTable/MultTable';
import {user} from '../api/api';
import s from './MultTableApp.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import {profileApi} from '../api/api';


const MultTableApp = () => {

  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [batteryCount, setBatteryCount] = useState(0);
  const [level, setLevel] = useState(1);

  useEffect(() => {

    const profile = profileApi.getProfileData();
      
    setBatteryCount(profile.profileData.batteryCount);
    setLevel(profile.profileData.level);
    setDifficultyLevel(1);//Заглушка
      

  }, [])

  const incBatteryCount = () => {
    const newBatteryCount = batteryCount + 1;
    setBatteryCount(newBatteryCount);
    profileApi.saveProfileData(newBatteryCount,level)
    //user.saveUserData(newBatteryCount);
  }


  return (
    <div className={s.page} >
      <div className={s.header}><Header /></div>
      <div className={s.content}><MultTable difficultyLevel={difficultyLevel} batteryCount={batteryCount} incBatteryCount={incBatteryCount} /></div>
      <div className={s.profile}><Profile level = {level}/></div>
      <div className={s.footer}><Footer/></div>
    </div>
  )
}

export default MultTableApp;