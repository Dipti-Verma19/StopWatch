let [milliseconds, seconds, minutes] = [0, 0, 0];
let lap = document.getElementById("lap");
let start = document.getElementById("start");
let timerRef = document.querySelector('.label');
let laplist = document.getElementById("laplist");
let mode = true;
let counter = 1;
let interval = null;
let lapmode = true;

start.addEventListener("click", () => {
    console.log("start");
    if (mode) {
        start.innerHTML = "Stop";
        lap.innerHTML = "Lap";
        start.style.backgroundColor = "red";
        interval = setInterval(displayTimer, 10);
        mode = false;
        lapmode = true;

    }
    else {
        start.innerHTML = "Start";
        lap.innerHTML = "Reset";
        start.style.backgroundColor = "black";
        clearInterval(interval);
        mode = true;
        lap.innerHTML = "Reset";
        lapmode = false;
    }
})


lap.addEventListener("click", () => {
    if (lapmode) {

        div = document.createElement("div");
        h2 = document.createElement("p");
        h2.innerText = "Lap" + counter;
        //console.log(h2);
        p = document.createElement("p");
        hr = document.createElement("hr")
        p.innerText = displayTimer();
        //console.log(p);
        div.style.display = "flex";
        div.style.justifyContent = "space-between";
        hr.style.color = "white";

        //console.log(hr);
        div.appendChild(h2);
        div.appendChild(p);
        laplist.appendChild(div);
        laplist.appendChild(hr);
        counter++;


    } else {

        [milliseconds, seconds, minutes] = [0, 0, 0];
        timerRef.innerHTML = ' 00 : 00 : 00 ';
        lap.innerHTML = "Lap";
        laplist.innerHTML = "";
        counter = 1;

    }
})
function displayTimer() {
    // console.log("inside");
    milliseconds++;
    if (milliseconds == 100) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${m} : ${s} : ${ms} `;
    let p = timerRef.textContent;
    return p;
}