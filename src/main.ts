import "./style.css";

interface Upgrade {
  name: string;
  cost: number;
  generation: number;
  ammount: number;
  button: HTMLButtonElement; //Clickable button
  description: HTMLDivElement; //Display elements
  id: string;
}

const priceIncrease = 1.15;

const tempButton = document.createElement("button");
const tempDescription = document.createElement("div");
const availableItems: Upgrade[] = [
  {
    name: "Pondering Orb",
    cost: 10,
    generation: 0.1,
    ammount: 0,
    button: tempButton,
    description: tempDescription,
    id: "ponder",
  },
  {
    name: "Telescope",
    cost: 100,
    generation: 2,
    ammount: 0,
    button: tempButton,
    description: tempDescription,
    id: "tele",
  },
  {
    name: "Scrying Pool",
    cost: 500,
    generation: 15,
    ammount: 0,
    button: tempButton,
    description: tempDescription,
    id: "scry",
  },
  {
    name: "Wizard's Tower",
    cost: 1000,
    generation: 50,
    ammount: 0,
    button: tempButton,
    description: tempDescription,
    id: "tower",
  },
  {
    name: "Library",
    cost: 10000,
    generation: 150,
    ammount: 0,
    button: tempButton,
    description: tempDescription,
    id: "lib",
  },
  {
    name: "Mystical Site",
    cost: 1000000,
    generation: 10000,
    ammount: 0,
    button: tempButton,
    description: tempDescription,
    id: "site",
  },
];

//Button creation
function createUpgradeButton(upgrade: Upgrade) {
  const button = document.createElement("button");
  button.id = upgrade.id;
  button.textContent = `${upgrade.name} | Cost ${upgrade.cost.toFixed(2)} mana`;
  button.onclick = () => buyUpgrade(upgrade);
  return button;
}

//Disable and Enable Button
function upgradeOnOff(upgrade: Upgrade) {
  if (counter < upgrade.cost) {
    upgrade.button.disabled = true;
  } else {
    upgrade.button.disabled = false;
  }
}

//Buy Upgrade Logic
function buyUpgrade(upgrade: Upgrade) {
  counter -= upgrade.cost;
  counterDisplay.textContent = `${counter} mana`;
  increaseRate += upgrade.generation;
  growthRate.textContent = `${increaseRate.toFixed(1)} mana per second`;
  upgrade.ammount++;
  upgrade.cost *= priceIncrease;
  upgrade.button.textContent = `${upgrade.name} | Cost ${
    upgrade.cost.toFixed(2)
  } mana`;
  updateDescription(upgrade);
}

//Create Descsription UI
function createDescription(upgrade: Upgrade) {
  const description = document.createElement("div");
  description.textContent = `${upgrade.name}s owned: ${upgrade.ammount}`;
  return description;
}

//Growth Rate Element | increaseRate is the value of increases per second
let increaseRate = 0;
const growthRate = document.createElement("div");
growthRate.id = "rate";
growthRate.textContent = `${increaseRate.toFixed(1)} mana per second`;

//Orb Button Element
const orb = document.createElement("button");
orb.id = "orb";
orb.textContent = "🔮";

//Increasing Counter Element
let counter = 0;
const counterDisplay = document.createElement("div");
counterDisplay.id = "counter";
counterDisplay.textContent = `${counter} mana`;

//Elements to Screen
document.body.appendChild(growthRate);
document.body.appendChild(orb);
document.body.appendChild(counterDisplay);
for (const upgrade of availableItems) {
  upgrade.button = createUpgradeButton(upgrade);
  document.body.appendChild(upgrade.button);
  upgrade.description = createDescription(upgrade);
  document.body.appendChild(upgrade.description);
  updateDescription(upgrade);
}

//Personalized descriptions for each upgrade type
function updateDescription(upgrade: Upgrade) {
  upgrade.description.textContent =
    `${upgrade.name}s owned: ${upgrade.ammount}`;
  switch (upgrade) {
    case availableItems[0]: {
      upgrade.description.innerHTML +=
        "<br>Ponder the orb to gain 0.1 mana per second<p>";
      break;
    }
    case availableItems[1]: {
      availableItems[1].description.innerHTML +=
        "<br>Observe the stars to gain 2 mana per second<p>";
      break;
    }

    case availableItems[2]: {
      availableItems[2].description.innerHTML +=
        "<br>Divine the future to gain 15 mana per second<p>";
      break;
    }

    case availableItems[3]: {
      availableItems[3].description.innerHTML +=
        "<br>Seclude yourself to gain 50 mana per second<p>";
      break;
    }
    case availableItems[4]: {
      availableItems[4].description.innerHTML +=
        "<br>Enjoy endless tomes to gain 150 mana per second<p>";
      break;
    }

    case availableItems[5]: {
      availableItems[5].description.innerHTML +=
        "<br>Display your mastery to gain 10,000 mana per second<p>";
      break;
    }
  }
}

//Event Listener Clicks Orb | Angel Castaneda
orb.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = `${counter} mana`;
});

let timeChange = 0;
let lastCall = performance.now();
let thisCall = performance.now();

//Function checks the time change between each call of requestAnimationFrame
requestAnimationFrame(frame);
function frame() {
  lastCall = thisCall;
  thisCall = performance.now();
  timeChange = (thisCall - lastCall) / 1000;
  autoIncrement(timeChange * increaseRate);
  requestAnimationFrame(frame);

  //Function call that enable and disable upgrade buttons
  for (const upgrade of availableItems) {
    upgradeOnOff(upgrade);
  }
}

//Auto increment logic
function autoIncrement(increase: number) {
  counter += increase;
  counterDisplay.textContent = `${counter.toFixed(2)} mana`;
}
