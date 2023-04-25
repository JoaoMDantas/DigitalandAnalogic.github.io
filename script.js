let hour=document.querySelector(".hour");
let min= document.querySelector('.minutes');
let sec= document.querySelector('.second');
let digit= document.querySelector('.digital');

function uptime(){
 let now= new Date();
 let h2= now.getHours();
 let m2= now.getMinutes();
 let s2= now.getSeconds();
digit.textContent=`${adjust(h2)}:${adjust(m2)}:${adjust(s2)}`;

let rth=((360/12)*h2);
let rtm=((360/60)*m2);
let rts=((360/60)*s2);
function adjust(time){
    return time<10 ?`0${time}` : time;
};
hour.style.transform=`rotate(${rth}deg)`;
min.style.transform=`rotate(${rtm}deg)`;
sec.style.transform=`rotate(${rts}deg)`;

}

setInterval(uptime,1000);
uptime();
