// now linking htl with javasript (html ID)
const daysR1 = document.getElementById("days")
const hoursR1 = document.getElementById("hours")
const minsR1 = document.getElementById("mins")
const secondsR1 = document.getElementById("seconds")

// 

const Ramadhan = "12 April 2021";

function countdown() {
    const ramadhanDate = new Date(Ramadhan);
    const currentDate = new Date();

    const totalSeconds = (ramadhanDate - currentDate) / 1000;

    // const days = (seconds / 3600 /24);


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;



// now linking htl with javasript (html ID)
    daysR1.innerHTML = days;
    hoursR1.innerHTML = formatTime(hours);
    minsR1.innerHTML = formatTime(mins);
    secondsR1.innerHTML = formatTime(seconds);

// CTRL D (CHANGING SIMILAR WORDS AT ONCE)

// 

// format to add 0 is 00 seconds
function formatTime(time) {
    return time < 10 ? `0${time}` : time;

}
// 



    // console.log(ramadhanDate - currentDate)

    // console.log(days, hours, minutes, seconds);

    // console.log(days);
    

    // console.log(ramadhanDate - currentDate);
}

// initial call
countdown();

setInterval(countdown, 1000);