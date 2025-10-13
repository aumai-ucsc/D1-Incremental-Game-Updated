import "./style.css";

//Orb Button Element
const orb = document.createElement("button");
orb.textContent = "🔮";

//Increasing Counter Element
let counter = 0;
const counterDisplay = document.createElement("div");
counterDisplay.textContent = `${counter} mana`;

//Adding Elements to Screen
document.body.appendChild(orb);
document.body.appendChild(counterDisplay);

//Changing Variables
const increaseRate = 1;

//Event Listener Clicks | Angel Castaneda
orb.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
});

//Variables to track changes in time between performance.now() calls
let timeChange = 0;
let lastCall = performance.now();
let thisCall = performance.now();

//Function checks the time change between each call of requestAnimationFrame
requestAnimationFrame(frame);
function frame() {
  lastCall = thisCall;
  thisCall = performance.now();
  timeChange = (thisCall - lastCall) / 1000;
  console.log(`timeChange is ${timeChange}`);
  autoIncrement(timeChange * increaseRate);
  requestAnimationFrame(frame);
}

//Request auto increment | Function that increases the counter by the increase value
function autoIncrement(increase: number) {
  counter += increase;
  counterDisplay.textContent = `${counter.toFixed(1)} mana`;
  console.log(`Button auto-clicked! Total: ${counter.toFixed(1)}`);
}
