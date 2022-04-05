
function createElements() {
    let hours = document.createElement("div");
    let minutes = document.createElement("div");
    let seconds = document.createElement("div");
    [hours.id, minutes.id, seconds.id] = ["hours", "minutes", "seconds"];
    hours.class = minutes.class = seconds.class = "time";

    let clock = document.getElementById("clock");
    clock.appendChild(hours);
    clock.appendChild(minutes);
    clock.appendChild(seconds);
}

function getHours(date) {
    hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours;
}

function getMinutes(date) {
    return date.getMinutes();
}

function getSeconds(date) {
    return date.getSeconds();
}

function displayTime() {
    let today = new Date();
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let timeOfDay = today.getHours<12 ? "AM" : "PM";
    let minutesStr = (getMinutes(today)<12 ? "0" : "") + getMinutes(today);
    let secondsStr = (getSeconds(today)<12 ? "0" : "") + getSeconds(today);

    let timeStr = getHours(today) + ":" + minutesStr + ":" + secondsStr + " " + timeOfDay;
    // console.log(timeStr);
    let clock = document.getElementById("clock");
    clock.innerHTML = timeStr;
}

// createElements();
// displayTime();