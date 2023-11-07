/**
 * This is the dataset of binary questions that you are required to use in this 
 * exam. It is currently assigned the easy to program (`questionsEasy`) option.
 * However you may choose whether to use the hard-to-program variant 
 * (`questionsHard`) for extra points, but remember that the hard part is to 
 * prepare the correct question for each given answer using the `asciiTable` 
 * object.
 * 
 * For more details, see the `variables.js` file
 */
const questions = questionsEasy;
/**
 * Window load event handler. Initializes the app when the page is fully loaded.
 * 
 * NOTE: Add all initialization code in this function
 */
const binaryCode = document.getElementById("question");
const questionsLeftElement = document.getElementById("questions-left");
const attemptsElement = document.getElementById("attempts");
const errorMessage = document.getElementById("error");
const successMessage = document.getElementById("success");
let questionsLength = 1;
const random = Math.floor(Math.random() * questions.length);
const randomQuestion = questions[random].question;
let questionsAnswer = questions[random].answer;
let attempts = 0;
const userInput = document.getElementById("inputAnswer");

const usedQuestion = [];
window.addEventListener('load', function () {
  printQuestion(binaryCode, randomQuestion);
  printQuestionsLeft(questionsLeftElement, questionsLength);
  attemptsElement.innerHTML = attempts;
  successMessage.className = "hidden";
  errorMessage.className = "hidden";
  userInput.value = ""
});
/**
 * 
 * @param {*} getter getting element
 * @param {*} question parameter for random question
 */
function printQuestion(getter, question) {
  getter.innerHTML = question;
}
/**
 * 
 * @param {*} getter getting element
 * @param {*} length parameter for length
 */
function printQuestionsLeft(getter, length) {
  getter.innerHTML = length;
}
/**
 * 
 * @param {*} getter get element from DOM
 * @param {*} dataset selects the dataset we are going to use
 */
const button = document.getElementById("check");
/**
 * all the functionality of the projectw
 */
function clickedButton() {
  const welcomeMessage = document.getElementById("welcome");
  const succesSpan = document.getElementById("correct-answer");
  const errorSpan = document.getElementById("wrong-answer");
  const getWinModal = document.getElementById("winModal");
  welcomeMessage.className = "hidden";
  if (userInput.value != questionsAnswer) {
    errorMessage.className = '.hidden';
    errorSpan.innerHTML = userInput.value;
    attempts++;
    attemptsElement.innerHTML = attempts;
    userInput.value = "";
  } else {
    attempts++;
    attemptsElement.innerHTML = attempts;
    successMessage.className = '.hidden';
    succesSpan.innerHTML = userInput.value;
    // creating new random values, when clicking the button
    const random2 = Math.floor(Math.random() * questions.length);
    const randomQuestion2 = questions[random2].question;
    const questionsAnswer2 = questions[random2].answer;
    console.log(randomQuestion2);
    console.log(questionsAnswer2);
    // making the old values equals to the new ones
    usedQuestion.push(randomQuestion);
    questionsLength--;
    printQuestionsLeft(questionsLeftElement, questionsLength);
    userInput.value = "";
    // check if we already used the question
    if(usedQuestion.includes(randomQuestion)) {
      printQuestion(binaryCode, randomQuestion2);
      questionsAnswer = questionsAnswer2;
    }
  }
  for(let i = 0; i < usedQuestion.length; i++){
    console.log(usedQuestion[i]);
  }
  if (questionsLength == 0) {
    printWinnerDiv(getWinModal);
  }
}
/**
 * 
 * @returns generating random value
 */
function gettingRandomValue() {
  const randomNumber = Math.floor(Math.random() * questions.length);
  return randomNumber;
}
button.addEventListener('click', clickedButton);
/**
 * 
 * @param {*} getter gettinf WinModal
 */
function constructWinner(getter) {
  getter.className = '.hidden';
  const div = document.createElement("div");
  div.className = 'modal-content';
  const h3 = document.createElement("h3");
  h3.innerHTML = '!!! W I N N E R !!!';
  const pElement = document.createElement('p');
  pElement.innerHTML = 'You have reached the end of the quiz';
  div.appendChild(h3);
  div.appendChild(pElement);
  getter.appendChild(div);
}
function printWinnerDiv(getter){
  return constructWinner(getter);
}
