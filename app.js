
function digitalClock() {
    let date = new Date();
    let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let timeFormat = "AM"

  if (hour===0) {
    hour = 12;  

  }
if (hour>12) {
    hour = hour-12;
    timeFormat="PM"
    
}
// if (hour<10) {
//     hour ="0" + hour;
    
// }
// if (min<10) {
//     min ="0" + min;
    
// }

// if (sec<10) {
//     sec ="0" + sec;
    
// }

hour = hour<10? "0" + hour:hour;
min = min<10? "0" + min :min;
sec = sec<10? "0" + sec:sec;

  let finalTime =`${hour}: ${min}: ${sec}`;

  document.getElementById("time").innerText = finalTime;
  document.querySelector('small').innerText = timeFormat;
  setInterval(digitalClock, 1000);
}

digitalClock();