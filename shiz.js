let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");

//Format is Date(year, month, day, hour, minute)
//Year is counter from 0 to 11
let endDate = new Date(2023,1,6,9,30);
//Output value in millisecs
let endTime = endDate.getTime();

function countdown(){
    let todayDate = new Date();
    //Output value in milliseconds
    let todayTime = todayDate.getTime();

    let remainingTime = endTime - todayTime;

    //60 secs = 1000 millisecs
    let oneMin = 60 * 1000;
    //1 hr = 60 mins
    let oneHr = 60 * oneMin;
    //1 day = 24 hrs
    let oneDay = 24 * oneHr;

    //Function to format number if it's single digit
    let addZeroes = num => num < 10 ? `0${num}` : num;
    
    //If end date is before todays date
    if(endTime < todayTime){
        clearInterval(i);
        document.querySelector(".countdown").
        innerHTML = `<h1>We have reached the countdown!</h1>`;
    }
    //If end date isn't before todays date
    else{
        //Calculating remaining days, hours, mins, secs
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);
        console.log(daysLeft, hrsLeft, minsLeft, secsLeft);

        //Displaying value
        dayBox.textContent = addZeroes(daysLeft);
        hrBox.textContent = addZeroes(hrsLeft);
        minBox.textContent = addZeroes(minsLeft);
        secBox.textContent = addZeroes(secsLeft);
    }
}
let i = setInterval(countdown,1000);
countdown();

//parallax
let sky = document.getElementById('sky')

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    sky.style.left = value * 1.5 + 'px';
});