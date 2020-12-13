var quizContainer = document.getElementById("quiz");
var secondsLeft = 60;

var myQuestions = [
    {
        question: "",

        answers: {
            a: "",
            b: "",
            c: "",
            d: ""
        },
        correctAnswer: ""
    },
];
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft === 0) {

            clearInterval(timerInterval);
        }

    }, 60000);
}

function buildQuiz() {

}

function showResults() {

}