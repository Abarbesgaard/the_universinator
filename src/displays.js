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
/** @typedef {Object} DisplayThing
 * @property {(item: StarSystem) => void} starSystem
 * @property {(item: StarSystem) => void} starSystemShort
 * @property {(item: Planet) => void} planet
 * @property {(item: Planet) => void} planetShort
 * */

/** @type {DisplayThing} */
export const Display = {
  starSystem: (item) => displayThing(starSystem, item),
  starSystemShort: (item) => displayThing(starSystemShort, item),
  planet: (items) => displayThing(planet, items),
  planetShort: (items) => displayThing(planetShort, items),
};
