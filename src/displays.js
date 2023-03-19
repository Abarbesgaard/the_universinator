/** @param {StarSystem} arg0 */
const starSystem = ({ color, shape, distance, signalDetected, newRegion }) => {
  return `Scanners are detecting a new ${color} star (mark it with a ${shape} on your star map (coming soon!))<br/>
It is ${distance} light years away.<br/>
${signalDetected ? "There is a signal detected coming from this system!" : "No signals detected."}<br/>
This system does ${newRegion ? "" : "not "} mark the beginning of a new region.`;
};

/** @param {Planet} arg0 */
const planet = ({ atmosphere, biome, geology, name }) => `
Name: ${name}<br/>
Atmosphere: ${atmosphere}<br/>
Primary Biome: ${biome}<br/>
Dominant Geology: ${geology}`;

/**
 * @param {Function} thing
 * @param {Object} items
 */
export function displayThing(thing, items) {
  /** @type {string} */
  const stuffToDisplay = thing(items);
  const displayEl = document.getElementById("displayScreen");
  if (displayEl) displayEl.innerHTML = stuffToDisplay;
}
/** @typedef {Object} DisplayThing
 * @property {(item: StarSystem) => void} starSystem
 * @property {(arg0: Object) => void} planet
 * */

/** @type {DisplayThing} */
export const Display = {
  starSystem: (item) => displayThing(starSystem, item),
  planet: (items) => displayThing(planet, items),
};
