import { jokesArray as data } from "./data.js";

const button = document.querySelector('#generate');
const p = document.querySelector('#p');
const language = document.querySelector('#selectLanguage');
const answer = document.querySelector('#answer');
const sound = document.querySelector('#sound');
const revealAnswerBtn = document.querySelector('.reveal');

button.addEventListener('click', () => {
    const languageIndex = { 'english': 0, 'tagalog': 1, 'bisaya': 2 }[language.value];
    const randomNum = Math.floor(Math.random() * data[languageIndex].jokes.length);

    p.textContent = data[languageIndex].jokes[randomNum].question;
    answer.textContent = data[languageIndex].jokes[randomNum].answer;
});

revealAnswerBtn.addEventListener('click',()=>{
    sound.play();
});


