var timeEle = document.querySelector("#time");
var wrapEle = document.querySelector(".wrapper");
var startBtn = document.querySelector("#start-button");
var submitBtn = document.querySelector("button.submit-Btn")
var questContainer = document.querySelector("#questionnaires")
var questEle = document.querySelector("#questions")
var answerBtn = document.querySelector("#answers-btn")
var report = document.querySelector(".correct-or-incorrect")
var userName = document.querySelector("#yourName").value
var userScore = document.querySelector("#user-score")




var setTime = 60;
var count;
//timer that will begin quiz to button is clicked
function startTimer() {
    timeEle.textContent = setTime
    var count = window.setInterval(function () {
        setTime--;
        timeEle.textContent = "Time:" + " " + setTime;
        if (setTime === 0) {
            clearInterval(count); 
        }
    }, 1000);
}

var scoreTot = 0
var scoreEle = document.querySelector(".currScore")

function scoreCard() {
    scoreEle.textContent = "Score: "+ (setTime - 1)
}


startBtn.addEventListener("click", function(){
    wrapEle.style.display = "none";
    startTimer()
    startQuiz()
})

function startQuiz() {
    startBtn.classList.add("hide");
    questContainer.classList.remove("hide");
    submitBtn.classList.add("d-none");
    questContainer.classList.remove("submit-score");

}


//Quiz Questions
var questions = [
    {
        question: "When using array what type of open/closing backets do you use?",
        options: ["Curly brackets {}", "Parenthesis ()", "Square brackets []", "All of the above"],
        correctAnswer: "C"
    },
    {
        question: "What are the common data types in Javascript?",
        options: ["class, id, ext", "Boolean, Strings, Numbers", "querySelector, getElementById, addEventListener", "script, link, href"],
        correctAnswer: "B"
    },
    {
        question: "Which element do we use to add Javascript to HTML?",
        options: ["<link>", "<script>", "<js>", "<div>"],
        correctAnswer: "B"
    },     
    {
        question: "If you wanted to comment out codes in Javascript, what do you use?",
        options: ["<!----Comment--->", "'Comment'", "//Comment", "All three answers will work"],
        correctAnswer: "C"
    },  
    {
        question: "In order to set a variable to a String, what do you use?",
        options: ["single quotes", "double quotes", "backticks", "A & B"],
        correctAnswer: "D"    
    }
];


var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var btn4 = document.querySelector("#btn4");


var questionsPointer = 0;

//Adding questions to buttons
function showQuestions() {
    if (questionsPointer === questions.length) {
        clearInterval(count)
        alert("Quiz Completed!")
        return
    }
    questEle.textContent = questions[questionsPointer].question
    btn1.textContent = questions[questionsPointer].options[0];
    btn2.textContent = questions[questionsPointer].options[1];
    btn3.textContent = questions[questionsPointer].options[2];
    btn4.textContent = questions[questionsPointer].options[3];


}


btn1.addEventListener("click", function(){
    if (btn1.getAttribute("data-answer") === questions[questionsPointer].correctAnswer) {
        report.setAttribute("style", "color: green");
        report.textContent = "CORRECT!!"
        questionsPointer++;
        showQuestions()
        scoreCard()
    } else {
        report.setAttribute("style", "color: red");
        report.textContent = "WRONG!!"
        setTime -= 10;
        scoreCard()
    }
});

btn2.addEventListener("click", function(){
    if (btn2.getAttribute("data-answer") === questions[questionsPointer].correctAnswer) {
        report.setAttribute("style", "color: green");
        report.textContent = "CORRECT!!"
        questionsPointer++;
        showQuestions()
        scoreCard()
    } else {
        report.setAttribute("style", "color: red");
        report.textContent = "WRONG!!"
        setTime -= 10;
        scoreCard()
    }
});

btn3.addEventListener("click", function(){
    if (btn3.getAttribute("data-answer") === questions[questionsPointer].correctAnswer) {
        report.setAttribute("style", "color: green");
        report.textContent = "CORRECT!!"
        questionsPointer++;
        showQuestions()
        scoreCard()
    } else {
        report.setAttribute("style", "color: red");
        report.textContent = "WRONG!!"
        setTime -= 10;
        scoreCard()
    }
});

btn4.addEventListener("click", function(){
    if (btn4.getAttribute("data-answer") === questions[questionsPointer].correctAnswer) {
        report.setAttribute("style", "color: green");
        report.textContent = "CORRECT!!"
        questionsPointer++;
        showQuestions()
        scoreCard()
    } else {
        report.setAttribute("style", "color: red");
        report.textContent = "WRONG!!"
        setTime -= 10;
        scoreCard()
    }
});
showQuestions()

//trying to add scorecard to highscore
// function showScore() {
//     document.getElementById("submit-score").classList.add("display-none");
//     document.getElementById("hide").classList.remove("display-none");
//     userScore.textContent = "Your official score is " + setTime + '.' 

// }
submitBtn.addEventListener("click", function(event) {
    event.stopPropagation();
    // showScore()
});


