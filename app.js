const secondHand = document.getElementById('seconds');
const minuteHand = document.getElementById('minutes');
const hourHand = document.getElementById('hours');

function getTime() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const  timeInterval = 6



    secondHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)';
    minuteHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds/10) + 'deg)'
    hourHand.style.transform = 'rotate(' + (hours * 30 + minutes/2) + 'deg)'

}
setInterval(getTime, 100)