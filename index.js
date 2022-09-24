const time=document.querySelector('.watch .time');
const Start=document.getElementById('Start');
const Stop=document.getElementById('Stop');
const Reset=document.getElementById('Reset');

let msec=0;
let interval=null;


//Start stop reset button action

Start.addEventListener('click',start);
Stop.addEventListener('click',stop);
Reset.addEventListener('click',reset);





//concept behind the stop watch
function timer(){
    msec++;


    
    let hr=Math.floor(msec/360000);
    let min=Math.floor((msec-(hr*360000))/6000);
    let sec=Math.floor((msec-(hr*360000)-(min*6000))/100);
    let milisec=msec%100;

    if(milisec<10){
        milisec='0'+milisec;
    }
    if(sec<10){
        sec='0'+sec;
    }
    if(min<10){
        min='0'+min;
    }
    if(hr<10){
        hr='0'+hr;
    }


    time.innerText=`${hr}:${min}:${sec}:${milisec}`;
}

// adding interval in the stop watch
function start(){
    if(interval){
        return
    }
    interval=setInterval(timer,10);
}


function stop(){
    clearInterval(interval);
    interval=null;
}


function reset(){
    stop();
    msec=0;
    time.innerText='00:00:00:00';
}