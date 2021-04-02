const countdown = document.querySelector('.countdown');

//Set Launch Date (käivitamise kuupäev millisekundites) (ms)
const launchDate = new Date('Jan 1, 2021, 13:00:00').getTime();

console.log(launchDate);

// update every second (värskendamine iga sekund)
const intvl = setInterval(() => {
    console.log('hello');
},1000);

// get todays date and time (ms) tänane kuupäev ja kellaaeg millisekundites
const now = new Date().getTime


// Distance from now to the launch date (kaugus praegusest käivituskuupäevast)
const distance = launchDate - now;

console.log (distance);

//Time calculations
const days = Math.floor(distance /(1000 * 60 * 60 * 24));
const hours = Math.floor(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);


// Display result
 countdown.innerHTML =`
 <div>${days}<span>Days</span></div>
 <div>${hours}<span>Hours</span></div>
 <div>${mins}<span>Minutes</span></div>
 <div>${seconds}<span>Seconds</span></div>
 `;

 //If launch date passed
 if(distance < 0){
// Stop countdown
clearInterval(intvl);
// Style and output text
countdown.style.color = '#17a2b8';
countdown.innerHTML = 'Launched!';

 }
