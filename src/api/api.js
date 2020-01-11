import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
}
    
)

export const user = {

    getUserData : () =>{

        return instance.get('profile?ID=1').then(res => {return res.data});
    },

    saveUserData: (batteryCount) =>{

        instance.post('profile',{ID:1,batteryCount:batteryCount}).then(
            res => {
                if (res.data.resultCode===0){
                    alert("Сохранено!");     
                } else {
                    alert("Ошибка");
                }
            }
        );

    }
}