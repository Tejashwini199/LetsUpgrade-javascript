
//Question:-
//Write a program to make a Stopwatch. Which takes the timer to be set from the user.

let output = document.getElementById('stopwatch');
let ms = 0;
let sec = 0;
let min = 0;

function timer() {
    ms++;
    if(ms >= 100){
        sec++
        ms = 0
    }
    if(sec === 60){
        min++
        sec = 0
    }
    if(min === 60){
        ms, sec, min = 0;
    }

    //Doing some string interpolation
    let milli = ms < 10 ? `0`+ ms : ms;
    let seconds = sec < 10 ? `0`+ sec : sec;
    let minute = min < 10 ? `0` + min : min;

    let timer= `${minute}:${seconds}:${milli}`;
    output.innerHTML =timer;
};
//Start timer
function start(){
 time = setInterval(timer,10);
}
//stop timer
function stop(){
    clearInterval(time)
}
//reset timer
function reset(){
    ms = 0;
    sec = 0;
    min = 0;

    output.innerHTML = `00:00:00`
}
const startBtn = document.getElementById('startBtn');
const stopBtn =  document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click',start,false);
stopBtn.addEventListener('click',stop,false);
resetBtn.addEventListener('click',reset,false);