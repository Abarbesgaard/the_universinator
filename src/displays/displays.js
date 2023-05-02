import * as introMessages from "./introSectionMessages";

const loadedGameMessage = () => {
  const message = () => `Saved game has been loaded.`;
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

/** @param {Region} arg0 */
const region = ({ name }) => `
Region Name: ${name}`;

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
  ...introMessages,
  planet: (items) => displayThing(planet, items),
  planetShort: (items) => displayThing(planetShort, items),
  region: (item) => displayThing(region, item),
  starSystem: (item) => displayThing(starSystem, item),
  starSystemShort: (item) => displayThing(starSystemShort, item),
};
