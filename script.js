var counter = 10;

function startQuiz() {
    setTimeout(function () {
        counter--;

        if (counter >= 0) {
            id = document.getElementById("timer");
            id.innerHTML = counter;
            

        } else if (counter < 0) {
            clearTimeout(counter);
            id = document.getElementById("timer");
            id.innerHTML = counter + 11;
            counter = 10;
            alert("It works!!!");
        }
    }, 1000)
}





