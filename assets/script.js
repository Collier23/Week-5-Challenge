

// save button
var saveBtn = document.querySelector(".saveBtn");
// time block
var timeBlock = document.querySelector(".description");
// save to local storage
saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var timeBlock = document.querySelector(".description").value;
    localStorage.setItem("timeBlock", timeBlock);
    console.log(timeBlock);
});

// get from local storage
var timeBlock = localStorage.getItem("timeBlock");
console.log(timeBlock);

// display on page
document.querySelector(".description").innerHTML = timeBlock;

// get the current date and time
var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDay);

// display the current date and time
$("#currentDay").text(currentDay);

var currentHour = moment().format("H");
console.log(currentHour);


