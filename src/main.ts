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

//Event Listener | Angel Castaneda
orb.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button clicked! Total: ${counter}`);
});

//Auto Clicker set to activate every second
setInterval(autoClick, 1000);
function autoClick() {
  counter++;
  counterDisplay.textContent = `${counter} mana`;
  console.log(`Button auto-clicked! Total: ${counter}`);
}