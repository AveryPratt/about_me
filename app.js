'use strict';

var score = 0;
var totalScore = 0;
var question1Passed = false;
var question2Passed = false;
var question3Passed = false;
var question4Passed = false;
var question5Passed = false;

totalScore += 1;
var question1 = 'Have I programmed before attending Code Fellows?';
while(question1Passed === false){
  console.log('Question ' +
  totalScore + ': ' +
  question1);
  var response1 = prompt(question1).toUpperCase();
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

totalScore += 1;
var question2 = 'Have I ever been outside of the U.S. and Canada?';
while(question2Passed === false){
  console.log('Question ' +
  totalScore + ': ' +
  question2);
  var response2 = prompt(question2).toUpperCase();
  if(response2 === 'Y' || response2 === 'YES' || response2 === 'YEP'){
    score += 1;
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

totalScore += 1;
var question3 = 'Have I ever flown in a hot air balloon?';
while(question3Passed === false){
  console.log('Question ' +
  totalScore + ': ' +
  question3);
  var response3 = prompt(question3).toUpperCase();
  if(response3 === 'Y' || response3 === 'YES' || response3 === 'YEP'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else if(response3 === 'N' || response3 === 'NO' || response3 === 'NOPE'){
    score += 1;
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

totalScore += 1;
var question4 = 'Do I have any pets?';
while(question4Passed === false){
  console.log('Question ' +
  totalScore + ': ' +
  question4);
  var response4 = prompt(question4).toUpperCase();
  if(response4 === 'Y' || response4 === 'YES' || response4 === 'YEP'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else if(response4 === 'N' || response4 === 'NO' || response4 === 'NOPE'){
    score += 1;
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

totalScore += 1;
var question5 = 'Am I able to calculate symplectic integrators?';
while(question5Passed === false){
  console.log('Question ' +
  totalScore + ': ' +
  question5);
  var response5 = prompt(question5).toUpperCase();
  if(response5 === 'Y' || response5 === 'YES' || response5 === 'YEP'){
    alert('Incorrect! Your score is ' + score + '/' + totalScore);
  }
  else if(response5 === 'N' || response5 === 'NO' || response5 === 'NOPE'){
    score += 1;
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

totalScore += 1;
var question6 = 'How old am I?';
console.log('Question ' +
totalScore + ': ' +
question6);
for(var i = 0; i < 4; i++){
  var response6 = prompt(question6).toUpperCase();
  var responseNum = parseInt(response6);
  if(responseNum === 25){
    score += 1;
    if(i === 0){
      score++;
      console.log('------------1up------------');
      alert('You earned a bonus point! Your score is ' + score + '/' + totalScore);
    }
    else{
      alert('Correct! Your score is ' + score + '/' + totalScore);
    }
    console.log('Response: ' +
    responseNum + '\nCorrect Answer: 25\nScore: ' +
    score + '/' +
    totalScore);
    break;
  }
  else if(responseNum < 25){
    if(i >= 3){
      console.log('Response: ' +
      responseNum + '\nCorrect Answer: 25\nTries Remaining: 0\nScore: ' +
      score + '/' +
      totalScore);
      alert('Incorrect! I am actually 25. Your score is ' + score + '/' + totalScore);
    }
    else{
      console.log('Response: ' +
      responseNum + '\nCorrect Answer: higher than ' +
      responseNum + '\nTries Remaining:' + (3 - i) + '\nScore: ' +
      score + '/' +
      totalScore);
      if(i < 2){
        alert('Too low. You have ' + (3 - i) + ' more guesses');
      }
      else{
        alert('Too low. You have 1 more guess');
      }
    }
  }
  else if(responseNum > 25){
    if(i >= 3){
      console.log('Response: ' +
      responseNum + '\nCorrect Answer: 25\nTries Remaining: 0\nScore: ' +
      score + '/' +
      totalScore);
      alert('Incorrect! I am actually 25. Your score is ' + score + '/' + totalScore);
    }
    else{
      console.log('Response: ' +
      responseNum + '\nCorrect Answer: lower than ' +
      responseNum + '\nTries Remaining:' + (3 - i) + '\nScore: ' +
      score + '/' +
      totalScore);
      if(i < 2){
        alert('Too high. You have ' + (3 - i) + ' more guesses');
      }
      else{
        alert('Too high. You have 1 more guess');
      }
    }
  }
  else{
    console.log('Response: ' +
    responseNum + '\n------------Invalid Answer------------');
    alert('That isn\'t a valid number. Try again.');
    i--;
    continue;
  }
}

totalScore += 1;
var question7 = 'What is a flavor of ice cream that I would like?';
console.log('Question ' +
totalScore + ': ' +
question7);
for(var j = 0; j < 6; j++){
  var response7 = prompt(question7).toUpperCase();
  if(response7 === 'CHOCOLATE CHIP COOKIE DOUGH' ||
    response7 === 'COOKIE DOUGH' ||
    response7 === 'CARAMEL' ||
    response7 === 'HAZELNUT' ||
    response7 === 'STRAWBERRY' ||
    response7 === 'MINT' ||
    response7 === 'MINT CHOCOLATE CHIP' ||
    response7 === 'VANILLA'){
    score++;
    if(j === 0){
      score += 1;
      console.log('------------1up------------');
      alert('You earned a bonus point! Your score is ' + score + '/' + totalScore);
    }
    else{
      alert('Correct! Your score is ' + score + '/' + totalScore);
    }
    console.log('Response: ' +
    responseNum + '\nCorrect Answers: chocolate chip cookie dough, cookie dough, caramel, hazelnut, strawberry, mint, mint chocolate chip, vanilla\nFinal Score: ' +
    score + '/' +
    totalScore);
    break;
  }
  else{
    if(j >= 6){
      console.log('Response: ' +
      responseNum + '\nCorrect Answer: 25\nTries Remaining: 0\nScore: ' +
      score + '/' +
      totalScore);
      alert('Blagh. The flavors I like are chocolate chip cookie dough, cookie dough, caramel, hazelnut, strawberry, mint, mint chocolate chip, and vanilla.\nFinal Score: ' + score + '/' + totalScore);
    }
    else{
      console.log('Response: ' +
      response7 + '\nCorrect Answer: A better flavor than ' +
      response7 + '\nTries Remaining:' + (6 - j) + '\nScore: ' +
      score + '/' +
      totalScore);
      if(j < 6){
        alert('Ew. No. You have ' + (6 - j) + ' more guesses');
      }
      else{
        alert('Ew. No. You have 1 more guess');
      }
    }
  }
}
