var timeEle = document.querySelector("#time");
var startBtn = document.querySelector("#button")


function startTimer() {
    var setTime = 60;
    var count = setInterval(function () {
        setTime--;
        var timeEl = timeEle.textContent = "Time:" + " " + setTime;
        console.log(setTime);
        if (setTime === 0) {
            timeEle.innerHTML = setTime
            alert("Times Up!")
            clearInterval(count);

            timeEle.textContent = timeEl
        }
    }, 1000)
}

function startBtn () {
    startTimer()
}
