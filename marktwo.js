var readlinesync = require("readline-sync");
var score = 0;
var userName = readlinesync.question("What's your name? ");

console.log("Welcome "+ userName + "! Lets see how much you know bollywood. Remember if your answer is incorrect, you will loose 1 point. ")
function game(question, answer) {
  var userAnswer = readlinesync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!")
    score = score + 1;
  } else {
    console.log("You are wrong!")
    score = score - 1;
  }
  console.log("current score", score);
  console.log("-_-")

}
var questions = [{
  question: "Who is wealthiest celebrity of bollywood?",
  answer: "shahrukh khan"
}, {
  question: "Who is know as sadi ka mahanayak of bollywood?",
  answer: "amitabh bachchan"
}, {
  question: "Who owns the team of Jaipur pink panthers of Pro Kabaddi League?",
  answer: "abhishek bachchan",
}, {
  question: "What is Sonam Kapoor's first movie?",
  answer: "saanwariya"
}, {
  question: "Who was the actress in the movie Tumhari Sulu?",
  answer: "vidya balan"
}]
for(let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  game(currentQuestion.question, currentQuestion.answer)

}
console.log("Congrats! Your score is: ", score)
