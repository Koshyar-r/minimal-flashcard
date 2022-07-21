const Answer = document.getElementById("answer-box")
const FirstOption = document.getElementById("first-option")
const SecondOption = document.getElementById("second-option")
const QuestionBox = document.getElementById("question-box")

if(FirstOption) {
    FirstOption.addEventListener("click", () => {
        Answer.classList.add("show-answer")
        QuestionBox.style.display = "none"
    })
}

if(SecondOption) {
    SecondOption.addEventListener("click", () => {
        Answer.classList.add("show-answer")
        QuestionBox.style.display = "none"
    })
}

function PlaySound() {
    document.getElementById("fun-soundtrack").play()
}

function PlayFunSound() {
    document.getElementById("fun-soundtrack").play()
}

function PlayFanSound() {
    document.getElementById("fan-soundtrack").play()
}