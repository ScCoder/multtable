import React from 'react';
import robotImg from '../../img/robot.png';

const Profile = ({level}) => {
    return (
        <div >     
            <div>Текущий уровень: {level}</div>       
             {<img className = 'profile__img' src={robotImg}/> }
        </div>
    )
}

export default Profile;