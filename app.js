'use strict';

var score = 0;
var totalScore = 0;
var question1 = 'Have I programmed before attending Code Fellows?';
var response1 = prompt(question1);
alert(checkCorrect(question1, response1, isYes));
var question2 = 'Have I ever been outside of the U.S. and Canada?';
var response2 = prompt(question2);
alert(checkCorrect(question2, response2, isYes));
var question3 = 'Have I ever flown in a hot air balloon?';
var response3 = prompt(question3);
alert(checkCorrect(question3, response3, isNo));
var question4 = 'Do I have any pets?';
var response4 = prompt(question4);
alert(checkCorrect(question4, response4, isNo));
var question5 = 'Am I able to calculate symplectic integrators?';
var response5 = prompt(question5);
alert(checkCorrect(question5, response5, isNo));

function checkCorrect(question, response, myFunc){
  totalScore++;
  var isCorrect = myFunc(response);
  if(isCorrect){
    score++;
  }
  var answer;
  if(myFunc === isYes){
    answer = 'Yes';
  }
  else if(myFunc === isNo){
    answer = 'No';
  }
  else{
    answer = 'Undefined';
  }
  var message = assembleMessage(question, answer, response, isCorrect);
  console.log(message);
  if(isCorrect){
    return 'Correct! Your score is ' + score + '/' + totalScore;
  }
  else{
    return 'Incorrect! Your score is ' + score + '/' + totalScore;
  }
};

function assembleMessage(question, answer, response, isCorrect){
  return 'Question ' + totalScore + ': ' + question + '\nResponse: ' + response + '\nCorrect Answer: ' + answer + '\nPoint Counted: ' + isCorrect + '\nScore: ' + score + '/' + totalScore;
};

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
