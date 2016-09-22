'use strict';

var score = 0;
var totalScore = 0;

var question1 = {
  question: 'Have I programmed before attending Code Fellows?',
  answer: true
};
var question2 = {
  question: 'Have I ever been outside of the U.S. and Canada?',
  answer: true
};
var question3 = {
  question: 'Have I ever flown in a hot air balloon?',
  answer: false
};
var question4 = {
  question: 'Do I have any pets?',
  answer: false
};
var question5 = {
  question: 'Am I able to calculate symplectic integrators?',
  answer: false
};
var question6 = {
  question: 'How old am I?',
  answer: 25
};
var question6Passed = false;
var question7 = {
  question: 'Guess an ice cream flavor that I like',
  answer: [
    'CHOCOLATE CHIP COOKIE DOUGH',
    'COOKIE DOUGH',
    'CARAMEL',
    'HAZELNUT',
    'STRAWBERRY',
    'MINT',
    'MINT CHOCOLATE CHIP',
    'VANILLA'
  ]
};
var question7Passed = false;

var questions = [question1,
  question2,
  question3,
  question4,
  question5
];

for(var q in questions){
  var questionPassed = false;
  totalScore++;
  var correct;
  if(questions[q].answer){
    correct = 'YES';
  }
  else{
    correct = 'NO';
  }
  while(questionPassed === false){
    console.log('Question ' +
    totalScore + ': ' +
    questions[q].question);

    var response = prompt(questions[q].question);
    var caps = response.toUpperCase();

    var isPositive = caps === 'Y' || caps === 'YES' || caps === 'YEP';
    var isNegative = caps === 'N' || caps === 'NO' || caps === 'NOPE';

    // Catches answers that aren't positive or negative
    if(!isPositive && !isNegative){
      alert('What language are you speaking? Try again');
      console.log('Response: ' +
      response + '\n------------Invalid Answer------------');
      continue;
    }
    // matches a positive response with a positive answer, or negative response with a negative answer
    else if((isPositive ^ !questions[q].answer)){
      score++;
      alert('Correct! Your score is ' + score + '/' + totalScore);
    }
    else{
      alert('Incorrect! Your score is ' + score + '/' + totalScore);
    }
    console.log('Response: ' +
    response + '\nCorrect Answer: ' +
    correct + '\nScore: ' +
    score + '/' +
    totalScore);
    questionPassed = true;
  }
}

while(!question6Passed){
  totalScore++;
  for(var i = 0; i < 4; i++){
    console.log('Question ' +
    totalScore + ': ' +
    question6.question);

    response = prompt(question6.question);

    if(parseInt(response) != 'NaN'){
      alert('pick a NUMBER');
    }
    else if(response === question6.answer){

    }
    else if(response < question6.answer){

    }
    else{

    }
  }
  question6Passed = true;
}
