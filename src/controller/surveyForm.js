import { questionTemplate } from '../template/questionTemplate';
import { moveToNextQuestion } from './utils';
export class SurveyForm {
    surveyQuesions = [];
    answers = [];
    constructor(surveyAPI = 'http://localhost:3000/surveyData'){
        this.surveyAPI = surveyAPI;
    }
    dataHandler(parentElementID) {
        document.querySelector(parentElementID).innerHTML = questionTemplate(1, this.surveyQuesions[0], this.surveyQuesions.length);
        document.querySelector('.surveyContainer .footerButton').addEventListener('click', () => {
            moveToNextQuestion(this.surveyQuesions);
        });
        document.querySelector('.surveyContainer .continueButton').addEventListener('click', () => {
            let selected = [];
            const inputs = document.querySelectorAll('.inputGroup input');
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].checked) {
                    selected.push(inputs[i].value)
                }
            }
            const currentQuestion = parseInt(document.querySelector('.surveyContainer #questionNumber').textContent, 10);
            if (selected.length !== 0) {
                this.answers.push({
                    [`questionID${currentQuestion}`]: selected.join(',')
                });
            }
            if (currentQuestion === this.surveyQuesions.length) {
                console.log(this.answers);
            }
            moveToNextQuestion(this.surveyQuesions);
        }
        );
    }
    render(parentElementID) {
        let localStorageObj = JSON.parse(localStorage.getItem('questionsData'));
        if (localStorageObj) {
            this.surveyQuesions = localStorageObj;
            this.dataHandler(parentElementID);
        } else {
            fetch(this.surveyAPI)
                .then(function (response) {
                    return response.json();
                })
                .then((myJson) => {
                    localStorage.setItem("questionsData", JSON.stringify(myJson));
                    this.surveyQuesions = myJson;
                    this.dataHandler(parentElementID);
                });
        }

    };

}