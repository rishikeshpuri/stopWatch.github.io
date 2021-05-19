const start = document.getElementById('start-btn');
const pause = document.getElementById('pause-btn');
const stop = document.getElementById('stop-btn');

const show = document.querySelector('.show-time')


let [hrs, mins, secs, milliSecs] = [0, 0, 0, 0];

let twatch;
let flagTimer='pau';


async function startWatch() {
    start.disabled = true;
    pause.disabled = false;
    stop.disabled = false;

    twatch = setInterval(function() {
        milliSecs+=10;
        if(milliSecs==1000){
            secs=Number(secs)+1;
            milliSecs=0;
        }
        if(secs<10){
            secs="0"+Number(secs);
        }

        if(secs==60){
            mins=Number(mins)+1;
            secs="00";
        }
        if(mins<10){
            mins="0"+Number(mins);
        }

        if(mins==60){
            hrs=Number(hrs)+1;
            mins="00";
        }
        if(hrs<10){
            hrs="0"+Number(hrs);
        }
            

        show.innerHTML=`${hrs}:${mins}:${secs}`;
        
    }, 10);
    
}

start.addEventListener('click',startWatch);

pause.addEventListener('click', ()=> {
    if(flagTimer==='pau') {
        clearInterval(twatch);
        pause.innerText = 'continue';
        flagTimer = 'conti';
    }else {
        flagTimer = 'pau';
        pause.innerText = 'pause';
        // continueFun();
        startWatch();
    }
});

stop.addEventListener('click', ()=> {
    flagTimer = 'pau';
    pause.innerHTML = 'pause';
    
    [hrs, mins, secs, milliSecs] = [0, 0, 0, 0];

    clearInterval(twatch);

    start.disabled = false;
    pause.disabled = true;
    stop.disabled = true;

    show.innerHTML = `00:00:00`;
})