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

function Random() {
        let Rand = Math.floor(Math.random() * 2)
        document.getElementsByTagName('audio')[Rand].play()
}

function PlaySound() {
    // document.getElementById("fun-soundtrack").play()
}

const FunAudio = document.getElementById("fun-soundtrack")

function PlayFunSound() {
    FunAudio.play()
}

const FanAudio = document.getElementById("fan-soundtrack")

function PlayFanSound() {
    FanAudio.play()
}
