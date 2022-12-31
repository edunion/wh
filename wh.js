

const targetTime = Math.floor((new Date(2023, 0, 1, 0, 0, 0).getTime()) / 1000);
const render = document.querySelector('.wh-container');
//test

//剩餘時間



 
function closed(){
 document.querySelector('.wh-ad').style.display = 'none';}


setInterval(() =>{

const currentTime = Math.floor((Date.now()) / 1000);
let timer = targetTime - currentTime;
//timer剩餘秒數


const minutes = Math.floor(timer / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

//
const displaySeconds = timer % 60;
const disPlayMinutes = minutes % 60;
const displayHours = hours % 24 ;
const displayDays = days ;

render.innerHTML = `剩餘<br>${displayDays}天${displayHours}小時${disPlayMinutes}分${displaySeconds}秒`;
  
   if (timer == 0) {
    clearInterval(interval);
     //結束倒數與觸發動作;
  } 
 
},1000)


