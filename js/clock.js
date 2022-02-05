const clockYear = document.querySelector("#clock-year");
const clockTime = document.querySelector("#clock-time");

function setClock(){
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,'0');
    const minutes = date.getMinutes().toString().padStart(2,'0');
    const second = date.getSeconds().toString().padStart(2,'0');
    clockYear.innerText = `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일`;
    clockTime.innerText = `${hours}:${minutes}:${second}`;
}

setClock();
setInterval(setClock,1000);

