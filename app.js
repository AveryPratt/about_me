'use strict';

var score = 0;
var totalScore = 0;

var question1 = {
  type: 'yesNo',
  text: 'Have I programmed before attending Code Fellows?',
  answer: true,
  tries: 1
};
var question2 = {
  type: 'yesNo',
  text: 'Have I ever been outside of the U.S. and Canada?',
  answer: true,
  tries: 1
};
var question3 = {
  type: 'yesNo',
  text: 'Have I ever flown in a hot air balloon?',
  answer: false,
  tries: 1
};
var question4 = {
  type: 'yesNo',
  text: 'Do I have any pets?',
  answer: false,
  tries: 1
};
var question5 = {
  type: 'yesNo',
  text: 'Am I able to calculate symplectic integrators?',
  answer: false,
  tries: 1
};
var question6 = {
  type: 'guessNumber',
  text: 'How old am I?',
  answer: 25,
  tries: 4
};
var question7 = {
  type: 'match',
  text: 'What is an ice cream flavor that Avery likes?',
  answer: ['CHOCOLATE CHIP COOKIE DOUGH', 'COOKIE DOUGH', 'CARAMEL', 'HAZELNUT', 'STRAWBERRY', 'MINT', 'MINT CHOCOLATE CHIP', 'VANILLA'],
  tries: 6
};

function askQuestion(question){
  totalScore += 1;
  for(var i = 0; i < question.tries; i++){
    var isValid = false;
    while(!isValid){
      var userAnswer = prompt(question.text).toUpperCase();
      var solution;
      if(typeof question.answer === 'number'){
        solution = solveNumberGuess(question, userAnswer, i);
      }
      else if(typeof question.answer === 'boolean'){
        solution = solveYesNo(question, userAnswer);
      }
      else{
        solution = solveMatchGuess(question, userAnswer, i);
      }
      if(solution.isValid){
        isValid = true;
        if(solution.isCorrect){
          i = question.tries;
        }
        console.log(solution.consoleMessage);
        alert(solution.alertMessage);
      }
      else{
        console.log('------------Invalid Response------------');
        alert('Unrecognized input. Try again.');
      }
    }
  }
}

function solveNumberGuess(question, userAnswer, i){
  var triesLeft = question.tries - i - 1;
  var isValid = (typeof parseInt(userAnswer)) === 'number';
  var isCorrect = question.answer === parseInt(userAnswer);
  if(isCorrect){
    score += 1;
  }
  var isAnswerTooLow = question.answer > userAnswer;
  var consoleMessage = assembleNumberGuessConsoleMessage(triesLeft, isCorrect, userAnswer, isAnswerTooLow, question);
  var alertMessage = assembleNumberGuessAlertMessage(isCorrect, isAnswerTooLow, triesLeft, question);
  return{
    isValid: isValid,
    isCorrect: isCorrect,
    consoleMessage: consoleMessage,
    alertMessage: alertMessage
  };
}

function assembleNumberGuessConsoleMessage(triesLeft, isCorrect, userAnswer, isAnswerTooLow, question){
  if(triesLeft > 0){
    if(isCorrect){
      return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nAnswer: Correct!\nScore: ' + score + '/' + totalScore;
    }
    else if(isAnswerTooLow){
      return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nAnswer: Too Low\nTries left: ' + triesLeft;
    }
    else{
      return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nAnswer: Too High\nTries left: ' + triesLeft;
    }
  }
  else {
    return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nAnswer: ' + question.answer + '\nScore: ' + score + '/' + totalScore;
  }
}

function assembleNumberGuessAlertMessage(isCorrect, isAnswerTooLow, triesLeft, question){
  if(isCorrect){
    return 'Correct! Your score is ' + score + '/' + totalScore + '.';
  }
  else{
    if(triesLeft > 0){
      if(isAnswerTooLow){
        return 'Wrong! Too Low. You have ' + triesLeft + ' tries left.';
      }
      else{
        return 'Wrong! Too High. You have ' + triesLeft + ' tries left.';
      }
    }
    else{
      return 'Wrong. The answer is ' + question.answer + '. Your score is ' + score + '/' + totalScore + '.';
    }
  }
}

function solveMatchGuess(question, userAnswer, i){
  var triesLeft = question.tries - i - 1;
  var isCorrect = false;
  for(var j in question.answer){
    if (userAnswer === question.answer[j]){
      isCorrect = true;
    }
  }
  if(isCorrect){
    score += 1;
  }
  var consoleMessage = assembleMatchGuessConsoleMessage(triesLeft, isCorrect, userAnswer, question);
  var alertMessage = assembleMatchGuessAlertMessage(triesLeft, isCorrect, question);
  return{
    isValid: true,
    isCorrect: isCorrect,
    consoleMessage: consoleMessage,
    alertMessage: alertMessage
  };
}

function assembleMatchGuessConsoleMessage(triesLeft, isCorrect, userAnswer, question){
  if(triesLeft > 0){
    if(isCorrect){
      return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nPossible Answers: ' + question.answer + '\nScore: ' + score + '/' + totalScore;
    }
    else{
      return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nAnswer: Incorrect\nTries left: ' + triesLeft;
    }
  }
  else {
    return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nPossible Answers: ' + question.answer + '\nScore: ' + score + '/' + totalScore;
  }
}

function assembleMatchGuessAlertMessage(triesLeft, isCorrect, question){
  if(isCorrect){
    return 'Correct! Acceptable answers are ' + question.answer + '. Your score is ' + score + '/' + totalScore + '.';
  }
  else{
    if(triesLeft > 0){
      return 'Wrong! You have ' + triesLeft + ' tries left.';
    }
    else{
      return 'Wrong! Acceptable answers are ' + question.answer + '. Your score is ' + score + '/' + totalScore + '.';
    }
  }
}

function solveYesNo(question, userAnswer){
  var isValid;
  var isUserAnswerYes;
  if(userAnswer === 'Y' || userAnswer === 'YES' || userAnswer === 'YEP'){
    isValid = true;
    isUserAnswerYes = true;
  }
  else if(userAnswer === 'N' || userAnswer === 'NO' || userAnswer === 'NOPE'){
    isValid = true;
    isUserAnswerYes = false;
  }
  else isValid = false;
  var isCorrect = question.answer === isUserAnswerYes;
  if(isCorrect){
    score += 1;
  }
  var consoleMessage = assembleYesNoConsoleMessage(userAnswer, isCorrect, question);
  var alertMessage = assembleYesNoAlertMessage(isCorrect);
  return{
    isValid: isValid,
    isCorrect: isCorrect,
    consoleMessage: consoleMessage,
    alertMessage: alertMessage
  };
}

function assembleYesNoConsoleMessage(userAnswer, isCorrect, question){
  return 'Question: ' + question.text + '\nResponse: ' + userAnswer + '\nCorrect: ' + isCorrect + '\nScore: ' + score + '/' + totalScore;
}

function assembleYesNoAlertMessage(isCorrect){
  if(isCorrect){
    return 'Correct! Your score is ' + score + '/' + totalScore + '.';
  }
  else{
    return 'Wrong! Your score is ' + score + '/' + totalScore + '.';
  }
}

askQuestion(question1);
askQuestion(question2);
askQuestion(question3);
askQuestion(question4);
askQuestion(question5);
askQuestion(question6);
askQuestion(question7);
