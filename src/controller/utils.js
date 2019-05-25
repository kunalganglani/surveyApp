export function updateOptions(questionObj) {
    let options = '';
    if (questionObj.multiSelect) {
        for (let i = 0; i < questionObj.options.length; i++) {
            options += `<div class="inputGroup">
            <input id="option${i}" name="option${i}" type="checkbox" value="${questionObj.options[i].value}"/>
            <label for="option${i}">${questionObj.options[i].label.text}</label>
            <div class="imageContainer">
            <img src ="${questionObj.options[i].img.src}"/>
            </div>
          </div>`;
        }
    } else {
        for (let i = 0; i < questionObj.options.length; i++) {
            options += `<div class="inputGroup">
            <input id="radio${i}" name="radio" type="radio" value="${questionObj.options[i].value}"/>
            <label for="radio${i}">${questionObj.options[i].label.text}</label>
          </div>`;
        }
    }
    return options;
}

export function moveToNextQuestion(surveyQuesions) {
  const currentQuestion = parseInt(document.querySelector('.surveyContainer #questionNumber').textContent, 10);
  const nextQuestionNumber = currentQuestion + 1;
  const nextQuestionObj = surveyQuesions[nextQuestionNumber - 1];
  if (nextQuestionObj) {
      document.querySelector('.surveyContainer #questionNumber').textContent = nextQuestionNumber;
      document.querySelector('.surveyContainer #questionText').textContent = nextQuestionObj.question.text;
      document.querySelector('.surveyContainer form').innerHTML = updateOptions(nextQuestionObj);
  }
}
