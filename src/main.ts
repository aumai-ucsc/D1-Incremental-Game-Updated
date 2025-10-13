import "./style.css";

//Orb Button Element
const orb = document.createElement("button");
orb.textContent = "🔮";

//Increasing Counter Element
let counter = 0;
const counterDisplay = document.createElement("div");
counterDisplay.textContent = `${counter} mana`;

//Upgrade Button Element
const upgrade1 = document.createElement("button");
upgrade1.textContent = "Pondering Orb - Upgrade Cost 10";

//Adding Elements to Screen
document.body.appendChild(orb);
document.body.appendChild(counterDisplay);
document.body.appendChild(upgrade1);

//Changing Variables
let increaseRate = 0;

//Event Listener Clicks Orb | Angel Castaneda
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

  //Function calls that happen every time the page is refreshed
  if (counter >= 10) {
    upgrade1.disabled = false;
  }
}

//Disable and Enable Upgrade
upgrade1.disabled = true;

//Upgrade1 event listener
upgrade1.addEventListener("click", () => {
  counter -= 10;
  if (counter < 10) {
    upgrade1.disabled = true;
  }
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
  increaseRate++;
});

//Request auto increment | Function that increases the counter by the increase value
function autoIncrement(increase: number) {
  counter += increase;
  counterDisplay.textContent = `${counter.toFixed(1)} mana`;
  console.log(`Button auto-clicked! Total: ${counter.toFixed(1)}`);
}
