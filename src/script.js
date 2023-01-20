var timeDisplayEl = $("#currentDay");

setInterval(displayTime, 1000);

function displayTime() {
    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayEl.text(currentTime);
}

