/*Sarah McWhite => CSC102 W2 Assignment Due April 9*/ 

const countdownElement = document.getElementById("countdown");
let countdownInterval;

/*starts countdown*/
function startCountdown() {
  console.log("Start button clicked");
  let currTme = 10;
  countdownElement.innerText = currTme;
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    currTme--;
    /*displays launch warning*/
    if (currTme < 5) {
      countdownElement.innerText = `Warning: Less than 1/2 way to launch, time left = ${currTme}`;
    } else {
      countdownElement.innerText = currTme;
    }/*displays blastoff*/
    if (currTme === 0) {
      clearInterval(countdownInterval);
      countdownElement.innerText = "Blastoff";
    }
  }, 1000);
}
