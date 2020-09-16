var startButton = document.querySelector("#start");
var rules = document.querySelector("#rules")


startButton.addEventListener("click", beginQuiz)

function gameTimer () {

}

function beginQuiz () {
    document.getElementById("rules").style.display = "none";
    document.getElementById("start").style.display = "none";
}