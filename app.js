'use strict';

var score = 0;
var response1 = prompt('Have I programmed before attending Code Fellows?');
if(isTrue(response1)){
  alert('Correct! Your score is ' + score + '/1');
  score ++;
}
else{
  alert('Incorrect! Your score is ' + score + '/1');
}
var response2 = prompt('Have I ever been outside of the U.S. and Canada?');
if(isTrue(response2)){
  alert('Correct! Your score is ' + score + '/2');
  score ++;
}
else{
  alert('Incorrect! Your score is ' + score + '/2');
}
var response3 = prompt('Have I ever flown in a hot air balloon?');
if(!isTrue(response3)){
  alert('Correct! Your score is ' + score + '/3');
  score ++;
}
else{
  alert('Incorrect! Your score is ' + score + '/3');
}
var response4 = prompt('Do I have any pets?');
if(isTrue(response4)){
  alert('Correct! Your score is ' + score + '/4');
  score ++;
}
else{
  alert('Incorrect! Your score is ' + score + '/4');
}
var response5 = prompt('Am I able to calculate simplectic integrators?');
if(!isTrue(response5)){
  alert('Correct! Your score is ' + score + '/5');
  score ++;
}
else{
  alert('Incorrect! Your score is ' + score + '/5');
}

function isTrue(response){
  if(
  response.toUpperCase() === 'Y' ||
  response.toUpperCase() === 'YES'){
    return true;
  }
  else{
    return false;
  }
};

/*
1. Have I programmed before code fellows? Y
2. Have I ever been outside of the U.S. and Canada? Y
3. Have I ever flown in a hot-air balloon? N
4. Do I have any pets? N
5. Am I able to calculate simplectic integrators? N
*/
