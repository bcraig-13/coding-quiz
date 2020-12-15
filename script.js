var counter = 60;
var startBtn = document.querySelector("#start-quiz");
var corrBtn = document.querySelector(".answerCorr");
var wroBtn = document.querySelector(".answerWro");

startBtn.addEventListener("click", startQuiz);
corrBtn.addEventListener("click", answerCorr);
wroBtn.addEventListener("click", answerWro);


//change x to global so timer can stop when quiz is finished

function startQuiz() {
    var x = setInterval(function () {
        counter--;

        if (counter >= 0) {
            id = document.getElementById("timer");
            id.innerHTML = counter;

        } else if (counter < 0) {
            clearInterval(x);
            id = document.getElementById("timer");
            id.innerHTML = counter + 61;//change this later if its negative
            counter = 60;
            alert("It works!!!");

        }
    }, 1000)

    let getStart = document.querySelector("#start-screen");
    let getQuiz = document.querySelector("#quiz1");
    getStart.style.display = "none";
    getQuiz.style.display = "block";
}

function clearH3() {
    document.getElementById("h3").innerHTML = "";
}

function answerCorr() {
    document.getElementById("h3").innerHTML = "Correct!";
    setTimeout(clearH3, 3000);
}

function answerWro() {
    document.getElementById("h3").innerHTML = "Wrong!";
    setTimeout(clearH3, 3000);
}


//create a loop checking high scores. start with first place
// array1.sort(); --sets array in order





