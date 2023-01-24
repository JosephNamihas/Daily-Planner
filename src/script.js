$("document").ready(function(){ 
    $(".saveBtn").on("click", function() {

        // Get nearby element values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Save item to localStorage
        localStorage.setItem(time, value);
    })
})

function updateHour() {

    var currentTime = moment().hours();
    // Loop to check for past, present / future

    $(".time-block").each(function() {

        var hourBlock = parseInt($(this).attr("id").split("-")[1]) // Looks for number outside of the hyphon
        if(hourBlock < currentTime) {
            $(this).addClass("past");
            
        } else if (hourBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {

            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }

    });
}

updateHour();

var interval = setInterval(updateHour, 15000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));












































/* TextArea IDs (put into array / object?)
var textArea08 = document.getElementById("textArea08");
var textArea09 = document.getElementById("textArea09");
var textArea10 = document.getElementById("textArea10");
var textArea11 = document.getElementById("textArea11");
var textArea12 = document.getElementById("textArea12");
var textArea13 = document.getElementById("textArea13");
var textArea14 = document.getElementById("textArea14");
var textArea15 = document.getElementById("textArea15");
var textArea16 = document.getElementById("textArea16");
var textArea17 = document.getElementById("textArea17");

// Button IDs
var saveBtn08 = document.getElementById("saveBtn08");               // For each button, in array, select prev() element (textarea) 
var saveBtn09 = document.getElementById("saveBtn09");
var saveBtn10 = document.getElementById("saveBtn10");
var saveBtn11 = document.getElementById("saveBtn11");
var saveBtn12 = document.getElementById("saveBtn12");
var saveBtn13 = document.getElementById("saveBtn13");
var saveBtn14 = document.getElementById("saveBtn14");
var saveBtn15 = document.getElementById("saveBtn15");
var saveBtn16 = document.getElementById("saveBtn16");
var saveBtn17 = document.getElementById("saveBtn17");


// TIME 
var currentDayEl = $("#currentDay");
setInterval(displayTime, 1000);

function displayTime() {
    var headerTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDayEl.text(headerTime);
}

// Saves to local storage when pressing button
saveBtn08.addEventListener("click", function() {


});

function saveEvent() {
    // Do I need 9 event listeners to correspond to each text area?
    // I could use recursion
}

// midnight plus x hours? Assign a set time to a specific text area? IF current time > textArea time, textArea = grey.


// if (hh:mm.add(8) > currentTime) {

//TODO - Save text values in text area to local storage
//TODO - TextAreas change colour depending on the time of day
*/