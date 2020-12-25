var readlineSync = require('readline-sync');
var chalk = require('chalk')
var score = 0;
var userName = readlineSync.question(chalk.bgCyan(`Hello! welcome to IOT(internet of things) quiz what is your name ? \n`))

let userAnswer = readlineSync.question(chalk.bgMagenta("\nDo you have any knowledge about IOT(internet of things)? \n"));


if (userAnswer.toLowerCase() === "yes" || userAnswer.toLowerCase() === "yeah" || userAnswer.toLowerCase() === "yup") {
    console.log(chalk.bgYellow("\nOk, lemme ask some questions then."))
} else if (userAnswer.toLowerCase() === "no" || userAnswer.toLowerCase() === "na" || userAnswer.toLowerCase() === "nope") {
    console.log(chalk.bgYellow("\nget to know about iot first to play this game"))
} else {
    console.log(chalk.bgRed("Please answer in yes or no."))
}

var questions = [{
    question: "Is IOT(internet of things) consist of internet? \n",
    answer: "yes",
},
{
    question: "communication of devices in iot can be wired and wireless(True or False) \n",
    answer: "true",
},
{
    question: "arduino is microprocessor(True or False) \n",
    answer: "false",
},
{
    question: "Raspberry pi is microprocessor(True or False) \n",
    answer: "true",
},
{
    question: "UART is communication protocol(True or False) \n",
    answer: "true",
},
{
    question: "UART is synchronous(True or False) \n",
    answer: "false",
},
{
    question: "SPI protocol is full duplex(True or False) \n",
    answer: "true"
},
{
    question: "I2C protocol is half duplex(True or False) \n",
    answer: "true"
},
{
    question: "I2C stands for inter-integrated-circuit(True or False) \n",
    answer: "true"
},
{
    question: "SPI stands for serial-peripheral-interface(True or False) \n",
    answer: "true"
}
];

var questionLength = questions.length;

function checkQuestion(question, answer) {
    let enteredAnswer = readlineSync.question(chalk.bgRed(question));
    if (enteredAnswer.toLowerCase() === answer) {
        console.log(chalk.black.bold.bgGreen("Right! ✓ "));
        score++;
    } else {
        console.log(chalk.bgRed("Wrong! ✗ "));
    }
}


var highScorers = [{
    name: "Shrikant",
    score: 9,
},
{
    name: "Abdul",
    score: 8,
},
{
    name: "hardik",
    score: 6,
}];

var highScorersLength = highScorers.length;

//below function prints screenshot sentence thrice if user scores 10
// function checkHighScorers(){
//   for(let j = 0; j < highScorersLength; j++){
//     if(score >= highScorers[j].score){
//       console.log("WOW! High score, send screenshot of this to shashikant to display your name in hoghscorers list ")
//     }
//   }
// }

function checkHighScorers() {
    if (score > highScorers[0].score || score > highScorers[1].score || score > highScorers[2].score) {
        console.log("WOW! High score, send screenshot of this to shashikant to display your name in hoghscorers list ")
    }
}

function printHighScorers() {
    console.log(chalk.bold("HIGH SCORES ARE:"))
    for (let j = 0; j < highScorersLength; j++) {
        console.log(chalk.bgWhite.black(`${highScorers[j].name}      ${highScorers[j].score}`))
    }
}

for (let i = 0; i < questionLength; i++) {
    let currentQuestion = questions[i];
    checkQuestion(currentQuestion.question, currentQuestion.answer);
    console.log("\n----------------------------------\n")
}

console.log("Your total score is: " + score);
console.log("\n----------------------------------\n")
printHighScorers();
console.log("\n----------------------------------\n")
checkHighScorers();
console.log(`Thank You ${chalk.black.bgGreen(userName)} for using my game.`)