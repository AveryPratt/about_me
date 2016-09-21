'use strict';

var score = 0;
var totalScore = 0;

queryCycle('Have I programmed before attending Code Fellows?', isYes);
queryCycle('Have I ever been outside of the U.S. and Canada?', isYes);
queryCycle('Have I ever flown in a hot air balloon?', isNo);
queryCycle('Do I have any pets?', isNo);
queryCycle('Am I able to calculate symplectic integrators?', isNo);

function queryCycle(question, myFunc){
  var response = prompt(question);
  alert(assembleMessage(response, myFunc));
  console.log(assembleConsoleMessage(question, response, myFunc));
}

function assembleMessage(response, myFunc){
  totalScore++;
  if(checkCorrect(response, myFunc)){
    score++;
    return 'Correct! Your score is ' + score + '/' + totalScore;
  }
  else{
    return 'Incorrect! Your score is ' + score + '/' + totalScore;
  }
};

function assembleConsoleMessage(question, response, myFunc){
  var answer;
  if(myFunc === isYes){
    answer = 'Yes';
  }
  else if(myFunc === isNo){
    answer = 'No';
  }
  else{
    answer = 'Answer Unknown';
  }
  var isCorrect = checkCorrect(response, myFunc);
  return 'Question ' +
  totalScore + ': ' +
  question + '\nResponse: ' +
  response + '\nCorrect Answer: ' +
  answer + '\nPoint Counted: ' +
  isCorrect + '\nScore: ' +
  score + '/' +
  totalScore;
}

function checkCorrect(response, myFunc){
  var isCorrect = myFunc(response);
  if(isCorrect){
    return true;
  }
  else return false;
}

function isYes(response){
  if(
  response.toUpperCase() === 'Y' ||
  response.toUpperCase() === 'YES'){
    return true;
  }
  else{
    return false;
  }
};

function isNo(response){
  if(
  response.toUpperCase() === 'N' ||
  response.toUpperCase() === 'NO'){
    return true;
  }
  else{
    return false;
  }
};
