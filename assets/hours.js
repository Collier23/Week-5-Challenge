var hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM"
];
var currentHour = moment().format("H");
console.log(currentHour);

// loop through the hours array
for (var i = 0; i < hours.length; i++) {
    // if the current time is less than the time block, change the background color to green
    if (currentHour < hours[i]) {
        $(".description").css("background-color", "lightgrey");
    }
    // if the current time is greater than the time block, change the background color to red
    else if (currentHour > hours[i]) {
        $(".description").css("background-color", "green");
    }
    // if the current time is equal to the time block, change the background color to grey
    else if (currentHour === hours[i]) {
        $(".description").css("background-color", "red");
    }
}
