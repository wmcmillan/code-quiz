var startButton = document.querySelector("#start");
var rules = document.querySelector("#rules")
var timer = document.querySelector("timer")


startButton.addEventListener("click", beginQuiz)

function beginQuiz () {
    gameTimer();
    document.getElementById("rules").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("answerButtons").style.display = "";
    document.getElementById("questions").style.display = "";

}

function gameTimer () {
    var timeLeft = 10;

    var timeInterval = setInterval(function(){
        timer.textContent = timeLeft + "seconds remain";
        timeLeft--;

        if (timeLeft == 0) {
            timer.textContent= "";
            gameOver();
            clearInterval(timeInterval);
            console.log(timeLeft);
        }
    }, 1000);
}

function gameOver() {
    document.getElementById("gameOver").style.display = "";
}