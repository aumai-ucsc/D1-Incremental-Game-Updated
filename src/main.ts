import "./style.css";

//Growth Rate Element | increaseRate is the value of increases per second
let increaseRate = 0;
const growthRate = document.createElement("div");
growthRate.textContent = `${increaseRate.toFixed(2)} mana per second`;

//Orb Button Element
const orb = document.createElement("button");
orb.textContent = "🔮";

//Increasing Counter Element
let counter = 0;
const counterDisplay = document.createElement("div");
counterDisplay.textContent = `${counter} mana`;

//Upgrade Button Elements
let costUp1 = 10;
let costUp2 = 100;
let costUp3 = 1000;
const priceIncrease = 1.15;
const upgrade1 = document.createElement("button");
upgrade1.textContent = `Pondering Orb - Upgrade Cost ${costUp1.toFixed(2)}`;
const upgrade2 = document.createElement("button");
upgrade2.textContent = `Telescope - Upgrade Cost ${costUp2.toFixed(2)}`;
const upgrade3 = document.createElement("button");
upgrade3.textContent = `Wizard's Tower - Upgrade Cost ${costUp3.toFixed(2)}`;

//Adding Elements to Screen
document.body.appendChild(growthRate);
document.body.appendChild(orb);
document.body.appendChild(counterDisplay);
document.body.appendChild(upgrade1);
document.body.appendChild(upgrade2);
document.body.appendChild(upgrade3);

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
  if (counter >= costUp1) {
    upgrade1.disabled = false;
  }
  if (counter >= costUp2) {
    upgrade2.disabled = false;
  }
  if (counter >= costUp3) {
    upgrade3.disabled = false;
  }

  if (counter < costUp1) {
    upgrade1.disabled = true;
  }
  if (counter < costUp2) {
    upgrade2.disabled = true;
  }
  if (counter < costUp3) {
    upgrade3.disabled = true;
  }
}

//Disable and Enable Upgrade
upgrade1.disabled = true;
upgrade2.disabled = true;
upgrade3.disabled = true;

//Upgrade1 event listener
upgrade1.addEventListener("click", () => {
  counter -= costUp1;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
  increaseRate += 0.1;
  growthRate.textContent = `${increaseRate.toFixed(2)} mana per second`;
  costUp1 *= priceIncrease;
  upgrade1.textContent = `Pondering Orb - Upgrade Cost ${costUp1.toFixed(2)}`;
});

//Upgrade2 event listener
upgrade2.addEventListener("click", () => {
  counter -= costUp2;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
  increaseRate += 2.0;
  growthRate.textContent = `${increaseRate.toFixed(2)} mana per second`;
  costUp2 *= priceIncrease;
  upgrade2.textContent = `Telescope - Upgrade Cost ${costUp2.toFixed(2)}`;
});

//Upgrade3 event listener
upgrade3.addEventListener("click", () => {
  counter -= costUp3;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
  increaseRate += 50.0;
  growthRate.textContent = `${increaseRate.toFixed(2)} mana per second`;
  costUp3 *= priceIncrease;
  upgrade3.textContent = `Wizard's Tower - Upgrade Cost ${costUp3.toFixed(2)}`;
});

//Request auto increment | Function that increases the counter by the increase value
function autoIncrement(increase: number) {
  counter += increase;
  counterDisplay.textContent = `${counter.toFixed(2)} mana`;
  console.log(`Button auto-clicked! Total: ${counter.toFixed(1)}`);
}
