let timerplay = document.querySelector(".timerplay")
let timeLog = document.querySelector(".logs")
let startBtn = document.getElementById("start-btn")
let flagBtn = document.getElementById("flag-btn")
let pauseBtn = document.getElementById("pause-btn")
let resetBtn = document.getElementById("reset-btn")
let recordTime = document.getElementById("record-time")
let delBTN = document.getElementById("delBtn")

let i = 0;
let msecs = 0;
let secs = 0;
let mins = 0;
let hours = 0;

let flagedTime = [];
let timeID = null;

startBtn.addEventListener('click',function(){
    if(timeID !== null){
        clearInterval(timeID);  
    }
    timeID = setInterval(timerStart,10);

})
pauseBtn.addEventListener('click',function(){
    clearInterval(timeID);
})
resetBtn.addEventListener('click',function(){
    clearInterval(timeID);
    timerplay.innerHTML = '00 : 00 : 00 : 000';
    msecs = secs = mins = hours = 0;
    timeLog.style.display = "none";

    
})

flagBtn.addEventListener('click',function(){
     timeLog.style.display = "block";
    flagedTime[i] = timerplay.textContent;
    recordTime.innerHTML += `<br>${i+1})${ flagedTime[i]}`;
    console.log(`${i+1})${ flagedTime[i]}`);
    i++;
       
})
delBTN.addEventListener('click',function(){
    recordTime.innerHTML = "Recorded time";
    i = 0;

})

function timerStart(){
    msecs +=10;
    if(msecs == 1000){
        msecs = 0;
        secs++;
    }
    if(secs == 60){
        secs = 0;
        mins++;
    }
    if(mins == 60){
        mins = 0;
        hours++;
    }
let msecStr = 0;
if(msecs < 100){
    msecStr = msecs < 10 ? `00${msecs}` : `0${msecs}`;
}
else{
    msecStr =`${msecs}`;
}

let secStr = secs < 10 ? `0${secs}` : `${secs}`;
let minStr = mins < 10 ? `0${mins}` : `${mins}`;
let hourStr = hours < 10 ? `0${hours}` : `${hours}`;

timerplay.innerHTML = `${hourStr} : ${minStr} : ${secStr} : ${msecStr}`;


}



