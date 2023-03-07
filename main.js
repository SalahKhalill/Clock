let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");

function updateClock(){
let currentDate = new Date();
setTimeout(updateClock, 1000);
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

const hourDeg = (hour / 12) * 360;
hourEl.style.transform = `rotate(${hourDeg}deg)`
const minuteDeg = (minute / 60) * 360;
minuteEl.style.transform = `rotate(${minuteDeg}deg)`
const secondDeg = (seconds / 60) * 360;
secondEl.style.transform = `rotate(${secondDeg}deg)`
}
updateClock();



