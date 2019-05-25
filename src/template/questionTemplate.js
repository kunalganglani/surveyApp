import { updateOptions } from "../controller/utils";
export function questionTemplate(questionNumber, questionObj, surveyLength) {
    const formContent = `${updateOptions(questionObj)}`;
    const templateGenerated = `<div class='surveyContainer'>
    <div class="questionHeading"> Question <span id="questionNumber">${questionNumber}</span> / ${surveyLength} </div>
    <div id="questionText"> ${questionObj.question.text} </div>
    <form class="form">${formContent}</form>
    <div class="footer">
    <button class="footerButton">Skip</button>
    <button class="footerButton continueButton">Continue</button>
    </div>
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet">
    </div>
    `;
    return templateGenerated;
}