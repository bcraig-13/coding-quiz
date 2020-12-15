var counter = 60;
var startBtn = document.querySelector("#start-quiz");
var corrBtn = document.querySelector(".answerCorr");



startBtn.addEventListener("click", startQuiz);
corrBtn.addEventListener("click", answerCorr);



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
    document.getElementById("h3").textContent = "";
    setTimeout(clearH3, 3000);
}

function answerCorr() {
    document.getElementById("h3").textContent = "Correct!";
    setTimeout(clearH3, 3000);
}

function answerWro() {
    document.getElementById("h3").textContent = "Wrong!";
    counter - 10;
    id.innerHTML = counter -10;
}

function nextQues() {
    if(document.getElementById("quiz1").style.display === "block") {
        document.getElementById("quiz1").style.display = "none";
        document.getElementById("quiz2").style.display = "block";
    } else if (document.getElementById("quiz2").style.display === "block") {
        document.getElementById("quiz2").style.display = "none";
        document.getElementById("quiz3").style.display = "block";
            
    } else if (document.getElementById("quiz3").style.display === "block") {
        document.getElementById("quiz3").style.display = "none";
        document.getElementById("quiz4").style.display = "block";
            
    } else if (document.getElementById("quiz4").style.display === "block") {
        document.getElementById("quiz4").style.display = "none";
        document.getElementById("quiz5").style.display = "block";
            
    } else (document.getElementById("quiz5").style.display === "block") {
        document.getElementById("results").style.display = "none";
        document.getElementById("results").style.display = "block";    
    }
}

//create a loop checking high scores. start with first place
// array1.sort(); --sets array in order





