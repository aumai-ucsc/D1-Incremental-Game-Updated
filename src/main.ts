import "./style.css";

//Orb Button Element
const orb = document.createElement("button");
orb.textContent = "🔮";

//Increasing Counter Element
let counter = 0;
const counterDisplay = document.createElement("div");
counterDisplay.textContent = `${counter} mana`;

//Upgrade Button Elements
const upgrade1 = document.createElement("button");
upgrade1.textContent = "Pondering Orb - Upgrade Cost 10";
const upgrade2 = document.createElement("button");
upgrade2.textContent = "Pondering Orb - Upgrade Cost 100";
const upgrade3 = document.createElement("button");
upgrade3.textContent = "Pondering Orb - Upgrade Cost 1000";

//Adding Elements to Screen
document.body.appendChild(orb);
document.body.appendChild(counterDisplay);
document.body.appendChild(upgrade1);
document.body.appendChild(upgrade2);
document.body.appendChild(upgrade3);

//Changing Variables | increaseRate is the value of increases per second
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

  //Function calls that enable and disable upgrade buttons
  if (counter >= 10) {
    upgrade1.disabled = false;
  }
  if (counter >= 100) {
    upgrade2.disabled = false;
  }
  if (counter >= 1000) {
    upgrade3.disabled = false;
  }

  if (counter < 10) {
    upgrade1.disabled = true;
  }
  if (counter < 100) {
    upgrade2.disabled = true;
  }
  if (counter < 1000) {
    upgrade3.disabled = true;
  }
}

//Disable and Enable Upgrade
upgrade1.disabled = true;
upgrade2.disabled = true;
upgrade3.disabled = true;

//Upgrade1 event listener
upgrade1.addEventListener("click", () => {
  counter -= 10;
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
