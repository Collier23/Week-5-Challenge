// use an if statement to check what time is it
// display a color based on the time of day
// use the CSS classes to change the color of the time block

if (currentHour === "9") {
    $("#9").addClass("present");
} else if (currentHour > "9") {
    $("#9").addClass("past");
} else {
    $("#9").addClass("future");
}

if (currentHour === "10") {
    $("#10").addClass("present");
} else if (currentHour > "10") {
    $("#10").addClass("past");
} else {
    $("#10").addClass("future");
}
