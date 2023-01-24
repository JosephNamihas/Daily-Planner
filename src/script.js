// display current day on page
$('#currentDay').text(moment().format('dddd, MMMM Do'));

// Executes when DOM loads, so present on page load.
$("document").ready(function(){ 
    $(".saveBtn").on("click", function() {

        // Get nearby element values
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // Save item to localStorage
        localStorage.setItem(time, value);
        $(".hidden").removeClass("hidden")
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

// For Loop here?


// Pair value / keys for local storage


    $("#hour-9 .description").val(localStorage.getItem("hour-9")); 
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
