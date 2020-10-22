var timeEle = document.querySelector("#time");
var wrapEle = document.querySelector(".wrapper");
var startBtn = document.querySelector("#start-button");
var questContainer = document.querySelector("#questionnaires")
var questEle = document.querySelector("#questions")
var answerBtn = document.querySelector("#answers-btn")

//timer that will begin quiz to button is clicked
function startTimer() {
    var setTime = 60;
    var count = setInterval(function () {
        setTime--;
        var timeEl = timeEle.textContent = "Time:" + " " + setTime;
        if (setTime === 0) {
            timeEle.innerHTML = setTime
            clearInterval(count);
            timeEle.textContent = timeEl
        }
    }, 1000);
}


document.addEventListener("click", function (event) {
    if (event.target === startBtn) {
        wrapEle.style.display = "none";
        startTimer()
        startQuiz()
    }
})

function startQuiz() {
    console.log("start")
    startBtn.classList.add("hide");
    questContainer.classList.remove("hide");
    showQs();

}

function nextQs() {
    
}

function showQs (question) {
}

function selectedAnswers() {

}

var questions = [
    {
        question: "When using array what type of open/closing backets do you use?",
        answer: [
            {text: "curly backets", correct: false},
            {text: "parathensis", correct: false},
            {text: "sqaure backets", correct: true},
            {text: "all the above", correct: false},
        
        ],

        question: "What are the common data types in Javascript?",
        answer: [
            {text: "Class, id, text", correct: false},
            {text: "Boolean, Strings, Numbers", correct: true},
            {text: "querySelector, getElementById, addEventListener", correct: false},
            {text: "script, link, href", correct: false},
        ],

        question: "Which element do we use to add Javascript to HTML?",
        answer: [
            {text: "<link>", correct: false},
            {text: "<script>", correct: true},
            {text: "<js>", correct: false},
            {text: "<div>", correct: false},
        ],

        question: "If you wanted to comment out codes in Javascript, what do you use?",
        answer: [
            {text: "<!----Comment--->", correct: false},
            {text: "Comment", correct: false},
            {text: "//Comment", correct: true},
            {text: "All three answers will work", correct: false},
        ],

        question: "In order to set a variable to a String, what do you use?",
        answer: [
            {text: "single quotes", correct: false},
            {text: 'double quotes', correct: false},
            {text: "backtick", correct: true},
            {text: "A & B", correct: true},
        ],       
    }
]

