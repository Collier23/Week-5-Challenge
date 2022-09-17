// use this js to set each hour of the timeblock to the correct colour
// past, present, future colours are set in the CSS
// use the following to set the colour of each timeblock

// get the current hour
var currentHour = moment().format("H");
console.log(currentHour);

// get the value of the hour for each timeblock
// use the following to get the value of the hour for each timeblock
// use the following to set the colour of each timeblock
// past, present, future colours are set in the CSS

// get the value of the hour for each timeblock
var hour9 = $("#hour-9").val();
console.log(hour9);
var hour10 = $("#hour-10").val();
console.log(hour10);
var hour11 = $("#hour-11").val();
console.log(hour11);
var hour12 = $("#hour-12").val();
console.log(hour12);
var hour13 = $("#hour-13").val();
console.log(hour13);
var hour14 = $("#hour-14").val();
console.log(hour14);
var hour15 = $("#hour-15").val();
console.log(hour15);
var hour16 = $("#hour-16").val();
console.log(hour16);
var hour17 = $("#hour-17").val();
console.log(hour17);    

//now use each time val against the current hour to set the colour of each timeblock
// use the following to set the colour of each timeblock
// past, present, future colours are set in the CSS

// set the colour of each timeblock
if (currentHour > hour9) {
    $("#hour-9").addClass("past");
} else if (currentHour < hour9) {
    $("#hour-9").addClass("future");
} else {
    $("#hour-9").addClass("present");
}

if (currentHour > hour10) {
    $("#hour-10").addClass("past");
} else if (currentHour < hour10) {
    $("#hour-10").addClass("future");
} else {
    $("#hour-10").addClass("present");
}

if (currentHour > hour11) {
    $("#hour-11").addClass("past");
} else if (currentHour < hour11) {
    $("#hour-11").addClass("future");
} else {
    $("#hour-11").addClass("present");
}

