var timeEle = document.querySelector("#time")

var setTime = 60;
function startTimer() {
    var count = setInterval(function () {
        setTime--;
        var timeEl = timeEle.textContent = "Time:" + " " + setTime;
        console.log(setTime);
        if (setTime === 0) {
            clearInterval(count);

            timeEle.textContent = timeEl
        }
    }, 1000)

}
startTimer()

