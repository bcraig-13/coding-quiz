var counter = 60;
var startBtn = document.querySelector("#start-quiz");
var timeMinus = document.querySelector("#timer");

startBtn.addEventListener("click", startQuiz);

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
            console.log("timer works");

        }
    }, 1000)

    let getStart = document.querySelector("#start-screen");
    let getQuiz = document.querySelector("#quiz1");
    getStart.style.display = "none";
    getQuiz.style.display = "block";
}


function answerWro() {
    document.getElementById("timer") - 10;
    counter - 10;
}

function nextQues1() {
    if(document.getElementById("quiz1").style.display === "block") {
        document.getElementById("quiz1").style.display = "none";
        document.getElementById("quiz2").style.display = "block";
    }
}

function nextQues2() {
    if (document.getElementById("quiz2").style.display === "block") {
        document.getElementById("quiz2").style.display = "none";
        document.getElementById("quiz3").style.display = "block";
    }
}
    
function nextQues3() {
    if (document.getElementById("quiz3").style.display === "block") {
        document.getElementById("quiz3").style.display = "none";
        document.getElementById("quiz4").style.display = "block";
    }
}

function nextQues4() {
    if (document.getElementById("quiz4").style.display === "block") {
        document.getElementById("quiz4").style.display = "none";
        document.getElementById("quiz5").style.display = "block";
    }
}

function nextQues5() {
    if (document.getElementById("quiz5").style.display === "block"); {
        document.getElementById("quiz5").style.display = "none";
        document.getElementById("results").style.display = "block";
    }
}
            
    


//create a loop checking high scores. start with first place
// array1.sort(); --sets array in order