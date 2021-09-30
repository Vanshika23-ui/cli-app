var readlineSync = require('readline-sync');


// var score = 0;
// //input
// var userAnswerAge = readlineSync.question("Am i older than 25? ");

// console.log("You entered " +
// userAnswerAge);

// //processing
// if(userAnswerAge == "yes") {
//   console.log("Your are right")
//   score = score+1;
//   console.log("Score is: " + score)
// }else {
//   console.log("You are wrong")
//   score = score-1;
//   console.log("Score is: " + score)
// }

// output
// console.log(myAge);


var score = 0;
var myName = readlineSync.question("What is my name?");

if(myName == "Vanshika") {
  console.log("You are right")
  score = score+1;
  console.log("Score is: " + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is: " + score)
}

var myHobby = readlineSync.question("What is Vanshika's hobby");

if(myHobby == "Dance") {
  console.log("You are right")
  score = score + 1;
  console.log("Score is:" + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is:" + score)
}

var streetfood = readlineSync.question("what is vashika's favourite street food");

if(streetfood == "Panipuri") {
  console.log("You are right")
  score = score +1;
  console.log("Score is:" + score)
}else {
  console.log("You are wrong")
  score = score-1;
  console.log("Score is:" + score)
}

console.log(myName);
console.log(myHobby);
console.log(streetfood);
