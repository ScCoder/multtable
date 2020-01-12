import React from 'react';
import batteryImg from '../../../../img/battery.png';
import s from './BatteryPanel.module.css';

const ChargedBattery = ({ batteryCharge }) => {
  
    const createBatary = () => {
  
      let result = [];
      for (let i = 90; i >= 0; i = i - 10) {
        if (i < batteryCharge) {
          result.push(<div key={i} className={s.charged_battery__charged_element}>+</div>);
        }
        else {
          result.push(<div key={i} className={s.charged_battery__empty_element}>-</div>);
        }
      }
      return result;
    }
  
    return <div className={s.charged_battery}>
      {createBatary()}
    </div>
  
  }
  
  
  const BatteryPanel = ({batteryCount, batteryCharge}) => {
    return (
      <div className={s.wrapper}>
        <div className={s.top_panel}>
          {batteryCount}<img className={s.battery_icon} src={batteryImg} />
        </div>
        <div className={s.body}>
          <ChargedBattery batteryCharge={batteryCharge} />
        </div>
      </div>
    )
  }

  export default BatteryPanel;