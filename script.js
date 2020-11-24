const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegrees = ((seconds / 60) * 360) + 90 ;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90 ;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;  
}

const liveTime = document.getElementById('datetime');

function startTime() {
  const today = new Date();

  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  liveTime.innerHTML = h + ':' + m + ':' + s;
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



setInterval(setDate, 1000);
setInterval(startTime, 1000);
setDate();
startTime();
checkTime(s);
checkTime(m);