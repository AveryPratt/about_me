'use strict';

var score = 0;
var totalScore = 0;
var question1Passed = false;
var question2Passed = false;
var question3Passed = false;
var question4Passed = false;
var question5Passed = false;

totalScore++;
var question1 = 'Have I programmed before attending Code Fellows?';
while(question1Passed === false){
  var response1 = prompt(question1).toUpperCase();
  console.log('Question ' +
  totalScore + ': ' +
  question1);
  if(response1 === 'Y' || response1 === 'YES' || response1 === 'YEP'){
    score++;
    alert('Correct! Your score is ' + score + '/' + totalScore);
  }
  else if(response1 === 'N' || response1 === 'NO' || response1 === 'NOPE'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else{
    alert('What language are you speaking? Try again');
    console.log('Response: ' +
    response1 + '\n------------Invalid Answer------------');
    continue;
  }
  console.log('Response: ' +
  response1 + '\nCorrect Answer: YES\nScore: ' +
  score + '/' +
  totalScore);
  question1Passed = true;
}

totalScore++;
var question2 = 'Have I ever been outside of the U.S. and Canada?';
while(question2Passed === false){
  var response2 = prompt(question2).toUpperCase();
  console.log('Question ' +
  totalScore + ': ' +
  question2);
  if(response2 === 'Y' || response2 === 'YES' || response2 === 'YEP'){
    score++;
    alert('Correct! Your score is ' + score + '/' + totalScore);
  }
  else if(response2 === 'N' || response2 === 'NO' || response2 === 'NOPE'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else{
    alert('What language are you speaking? Try again');
    console.log('Response: ' +
    response2 + '\n------------Invalid Answer------------');
    continue;
  }
  console.log('Response: ' +
  response2 + '\nCorrect Answer: YES\nScore: ' +
  score + '/' +
  totalScore);
  question2Passed = true;
}

totalScore++;
var question3 = 'Have I ever flown in a hot air balloon?';
while(question3Passed === false){
  var response3 = prompt(question3).toUpperCase();
  console.log('Question ' +
  totalScore + ': ' +
  question3);
  if(response3 === 'Y' || response3 === 'YES' || response3 === 'YEP'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else if(response3 === 'N' || response3 === 'NO' || response3 === 'NOPE'){
    score++;
    alert('Correct! Your score is ' + score + '/' + totalScore);
  }
  else{
    alert('What language are you speaking? Try again');
    console.log('Response: ' +
    response3 + '\n------------Invalid Answer------------');
    continue;
  }
  console.log('Response: ' +
  response3 + '\nCorrect Answer: YES\nScore: ' +
  score + '/' +
  totalScore);
  question3Passed = true;
}

totalScore++;
var question4 = 'Do I have any pets?';
while(question4Passed === false){
  var response4 = prompt(question4).toUpperCase();
  console.log('Question ' +
  totalScore + ': ' +
  question4);
  if(response4 === 'Y' || response4 === 'YES' || response4 === 'YEP'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else if(response4 === 'N' || response4 === 'NO' || response4 === 'NOPE'){
    score++;
    alert('Correct! Your score is ' + score + '/' + totalScore);
  }
  else{
    alert('What language are you speaking? Try again');
    console.log('Response: ' +
    response4 + '\n------------Invalid Answer------------');
    continue;
  }
  console.log('Response: ' +
  response4 + '\nCorrect Answer: YES\nScore: ' +
  score + '/' +
  totalScore);
  question4Passed = true;
}

totalScore++;
var question5 = 'Am I able to calculate symplectic integrators?';
while(question5Passed === false){
  var response5 = prompt(question5).toUpperCase();
  console.log('Question ' +
  totalScore + ': ' +
  question5);
  if(response5 === 'Y' || response5 === 'YES' || response5 === 'YEP'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else if(response5 === 'N' || response5 === 'NO' || response5 === 'NOPE'){
    score++;
    alert('Correct! Your score is ' + score + '/' + totalScore);
  }
  else{
    alert('What language are you speaking? Try again');
    console.log('Response: ' +
    response5 + '\n------------Invalid Answer------------');
    continue;
  }
  console.log('Response: ' +
  response5 + '\nCorrect Answer: YES\nScore: ' +
  score + '/' +
  totalScore);
  question5Passed = true;
}
