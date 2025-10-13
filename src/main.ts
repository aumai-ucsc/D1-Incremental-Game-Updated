import "./style.css";

//Interface for upgrades
interface Upgrade {
  //Variables
  name: string;
  cost: number;
  generation: number;
  ammount: number;
  button: HTMLButtonElement; //This holds the clickable button for each upgrade
}

//Value to jump price of upgrade after every purchase
const priceIncrease = 1.15;

//Function that creates a button for an upgrade. Returns the button so that the upgrade can add it to thier variables
function createUpgradeButton(upgrade: Upgrade) {
  const button = document.createElement("button");
  button.textContent = `${upgrade.name} | Cost ${upgrade.cost.toFixed(2)} mana`;
  button.onclick = () => buyUpgrade(upgrade);
  return button;
}

//Disable and Enable Upgrade Button Function
function upgradeOnOff(upgrade: Upgrade) {
  if (counter < upgrade.cost) {
    upgrade.button.disabled = true;
  } else {
    upgrade.button.disabled = false;
  }
}

//Function to buy upgrades
function buyUpgrade(upgrade: Upgrade) {
  counter -= upgrade.cost;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
  increaseRate += upgrade.generation;
  growthRate.textContent = `${increaseRate.toFixed(2)} mana per second`;
  upgrade.cost *= priceIncrease;
  upgrade.button.textContent = `${upgrade.name} | Cost ${
    upgrade.cost.toFixed(2)
  } mana`;
}

//Upgrade List
const tempButton = document.createElement("button");
const availableItems: Upgrade[] = [
  {
    name: "Pondering Orb",
    cost: 10,
    generation: 0.1,
    ammount: 0,
    button: tempButton,
  },
  {
    name: "Telescope",
    cost: 100,
    generation: 2,
    ammount: 0,
    button: tempButton,
  },
  {
    name: "Scrying Pool",
    cost: 500,
    generation: 15,
    ammount: 0,
    button: tempButton,
  },
  {
    name: "Wizard's Tower",
    cost: 1000,
    generation: 50,
    ammount: 0,
    button: tempButton,
  },
  {
    name: "Library",
    cost: 10000,
    generation: 150,
    ammount: 0,
    button: tempButton,
  },
  {
    name: "Mystical Site",
    cost: 1000000,
    generation: 10000,
    ammount: 0,
    button: tempButton,
  },
];

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

//Adding Elements to Screen
document.body.appendChild(growthRate);
document.body.appendChild(orb);
document.body.appendChild(counterDisplay);
for (const upgrade of availableItems) {
  upgrade.button = createUpgradeButton(upgrade);
  document.body.appendChild(upgrade.button);
}

//Adding descriptions to each button/upgrade option
availableItems[0].button.title = "Ponder the orb for 0.1 mana per second";

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

  //Function call that enable and disable upgrade buttons
  for (const upgrade of availableItems) {
    upgradeOnOff(upgrade);
  }
}

//Request auto increment | Function that increases the counter by the increase value
function autoIncrement(increase: number) {
  counter += increase;
  counterDisplay.textContent = `${counter.toFixed(2)} mana`;
  console.log(`Button auto-clicked! Total: ${counter.toFixed(1)}`);
}
