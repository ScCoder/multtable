import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/'
}
    
)

export const profileApi = {

    getProfileData: () =>{

        return instance.get('profile').then(res => {return res.data});
    },

    saveProfileData: (batteryCount,level) =>{

        instance.post('profile',{profileData:{batteryCount,level}}).then(
            res => {
                if (res.data.resultCode===0){
                   // alert("Сохранено!");     
                } else {
                    alert("Ошибка");
                }
            }
        );

    }
}

export const questionsApi = {
    saveQuestionsStats : (answers) => {

        instance.post('questions',{answers}).then(
            res => {
                if (res.data.resultCode===0){
                  //  alert("Сохранено!");     
                } else {
                    alert("Ошибка");
                }
            }
        );
    },

    getQuestions : () => {
        return instance.get('questions').then(
            res => {
                if (res.data.resultCode===0){
                    return res.data 
                }else{
                    alert("Ошибка");
                }
            }
            );
    }

}