var counter = 60;


function startQuiz() {
    var x = setInterval(function () {
        counter--;
    
        if (counter >= 0) {
            id = document.getElementById("timer");
            id.innerHTML = counter;
    
        } else if (counter < 0) {
        clearInterval(x);
        id = document.getElementById("timer");
        id.innerHTML = counter + 61;
        counter = 60;
        alert("It works!!!");
    
        }
    }, 1000)
}


