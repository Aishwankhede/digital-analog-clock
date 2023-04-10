const hourEl = document.getElementById("hour");
const minEl = document.getElementById("min");
const secEl = document.getElementById("sec");
const ampmEl = document.getElementById("ampm");

function renderTime() {
  var time = new Date();
  var h = time.getHours(); // 2
  var m = time.getMinutes();
  var s = time.getSeconds();
  ampmEl.innerText = h > 12 ? "PM" : "AM";

  /* convert 24hr format to 12 hr format */
  h = h > 12 ? h % 12 : h;


  // if(h=h>12){
  //   console.log(h%12);
  // }
  // else{
  //   console.log(h);
  // }

  /* add 0 in begening if h/m/s is single digit (means less than 10)*/
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minEl.innerText = m;
  secEl.innerText = s;
}

setInterval(renderTime, 1000);
// setInterval(() => {}, 1000);

// element.addEventListener('click', () => {})
// element.addEventListener('click', renderTime)

// setTimeout(() => {
//   // code
// }, 1000);

// console.log(h, m, s);
