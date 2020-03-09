
const MEMORY_ANSWERS_COUNT = 2;

export const profileApi = {

    getProfileData: () => {

        let profile = JSON.parse(localStorage.getItem('profile'));

        if (profile === null) {
            profile = { profileData: { batteryCount: 1, level: 0 } }
        }

        return profile;

    },

    saveProfileData: (batteryCount, level) => {

        localStorage.setItem('profile', JSON.stringify({ profileData: { batteryCount, level } }))

    }
}



export const questionsApi = {

    saveQuestionsStats: (answers) => {

        let questionsStats = loadQuestionStatsFromStorage();

        applyAnswerstoQuestionsStats(questionsStats, answers);

        saveQuestionStatsToStorage(questionsStats);
    },

    getQuestions: () => {

        const questionsStats = loadQuestionStatsFromStorage();

        let questions = []; let questionsCount = 0; let i = 0;
        while (questionsCount < 10) {

            const qStatsElement = questionsStats[i];
            i++;
            if (qStatsElement.CorrectAnswers < MEMORY_ANSWERS_COUNT) {
                questions.push({ A: qStatsElement.A, B: qStatsElement.B });
                questionsCount++;
            }

        };

        return questions;

    }

}

const saveQuestionStatsToStorage = (questionsStats) => {
    localStorage.setItem('questionsStats', JSON.stringify(questionsStats));
}

const loadQuestionStatsFromStorage = () => {

    let questionsStats = JSON.parse(localStorage.getItem('questionsStats'));

    if (questionsStats === null) {
        questionsStats = initQuestionsStats();
        saveQuestionStatsToStorage(questionsStats);
    }

    return questionsStats;
}


const applyAnswerstoQuestionsStats = (questionsStats, answers) => {
    questionsStats.forEach(qStatsElement => {
        for (let i = 1; i <= 10; i++) {
            const answersElement = answers[i];
            if (qStatsElement.A == answersElement.A && qStatsElement.B == answersElement.B && answersElement.isCorrect) {
                qStatsElement.CorrectAnswers++;
            }
        }
    });
}

const initQuestionsStats = () => {
    let questionsStats = [];
    for (let A = 2; A <= 9; A++) {
        for (let B = A; B <= 9; B++) {
            questionsStats.push({ A, B, CorrectAnswers: 0 });
        }
    }
    return questionsStats;
}
