function displayTimeAndDay(){
const now = new Date();
const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]
const dayOfWeek = daysOfWeek[now.getDay()];

const time = now.toUTCString('en-US', now.getTime);

document.getElementById("currentTime").textContent =  time;
document.getElementById("day").textContent = dayOfWeek;

console.log(time);
console.log(dayOfWeek);
}

window.onload = displayTimeAndDay;



// get the current time

// display the result
