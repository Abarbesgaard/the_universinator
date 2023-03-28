import { Game } from "./gameLogic/gameFunctions";

const loadedGameMessage = () => {
  const message = () => `Saved game has been loaded.`;
  displayThing(message, null);
};

const newGameMessage = () => {
  const message = () => `Hello! Hello? Do you read me?<br>
...<br>
My readings indicate you're receiving me but are not capable of responding yet. That's fine, I'll just trust you to listen for now.<br>
...<br>
Welcome, captain, to IPASA, the InterPlanetary Aeronautics and Space Administration. By engaging this ship's SteelScan universal scanner, you have agreed to become our newest space explorer, the captain of your very own ship, charged with discovering the unexplored parts of your sector. Your cryogenically preserved crew should be coming out of their stasis sleep soon. But first, you should name your ship!<br>
...<br>
To the right of this display screen is a command prompt. Type in the command "shipname" followed by the name you wish to give your ship, and then press the key labeled "return" on your keyboard. Or maybe it was labeled "enter", I don't remember what we decided to call it in your language.`;
  displayThing(message, null);
};

const shipNameSaved = () => {
  const shipName = Game.getShipName();
  const { ScienceOfficer, EngineeringOfficer, MedicalOfficer, TacticalOfficer } = Game.getCrewNames();
  const message =
    () => `The Starship ${shipName}. OK... well... it's your ship and if you're fine with that name then I'm fine with it, too.<br>
...<br>
Introduce Crew (or have them introduce themselves). Science: ${ScienceOfficer}, Engineering: ${EngineeringOfficer}, Medical: ${MedicalOfficer}, Tactical: ${TacticalOfficer}<br>
...<br>
To scan your current star system, type "scansystem" into the command prompt.`;
  displayThing(message, null);
};

/** @param {StarSystem} arg0 */
const starSystem = ({ color, shape, distance, name, signalDetected, newRegion }) => {
  const starShapes = {
    Circle: "⚬",
    Square: "□",
    Triangle: "△",
    "Double Circle": "☉",
  };
  return `Scanners are detecting a new ${color} star, marking it with a ${starShapes[shape]}.<br/>
It is ${distance} light years away.<br/>
${signalDetected ? "There is a signal detected coming from this system!" : "No signals detected."}<br/>
This system does ${newRegion ? "" : "not "} mark the beginning of a new region.<br/>
The locals call this system "${name}"`;
};

/** @param {StarSystem} arg0 */
const starSystemShort = ({ id, color, shape, name }) => {
  const starShapes = {
    Circle: "⚬",
    Square: "□",
    Triangle: "△",
    "Double Circle": "☉",
  };
  return `System #${id}: ${name}, a ${color} star (${starShapes[shape]}).`;
};

/** @param {Planet} arg0 */
const planet = ({ atmosphere, biome, geology, name }) => `
Name: ${name}<br/>
Atmosphere: ${atmosphere}<br/>
Primary Biome: ${biome}<br/>
Dominant Geology: ${geology}`;

/** @param {Planet} arg0 */
const planetShort = ({ id, name }) => `Planet #${id}: ${name}.`;

/**
 * @param {Function} thing
 * @param {Object} items
 */
export function displayThing(thing, items) {
  /** @type {string} */
  const stuffToDisplay = thing(items);
  const displayEl = document.getElementById("displayScreen");
  const hr = `<hr>`;
  if (displayEl) displayEl.innerHTML += `${stuffToDisplay}${hr}`;
  displayEl?.scrollBy({ top: 200 });
}

/** @type {DisplayThing} */
export const Display = {
  loadedGameMessage,
  newGameMessage,
  planet: (items) => displayThing(planet, items),
  planetShort: (items) => displayThing(planetShort, items),
  shipNameSaved,
  starSystem: (item) => displayThing(starSystem, item),
  starSystemShort: (item) => displayThing(starSystemShort, item),
};
