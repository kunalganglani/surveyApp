/**
 * This is our "Entry Point"
 */
import { SurveyForm } from './controller/surveyForm';
function init() {
    const surveyForm = new SurveyForm();
    surveyForm.render('#root');
}
init();