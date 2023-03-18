const loadingScreen = () => `
███████ ████████ ███████ ███████ ██      ███████  ██████  █████  ███    ██<br/>
██         ██    ██      ██      ██      ██      ██      ██   ██ ████   ██<br/>
███████    ██    █████   █████   ██      ███████ ██      ███████ ██ ██  ██<br/>
     ██    ██    ██      ██      ██           ██ ██      ██   ██ ██  ██ ██<br/>
███████    ██    ███████ ███████ ███████ ███████  ██████ ██   ██ ██   ████`;

const starSystem = ({ color, shape, distance, signal, newRegion }) => {
  const starColor = color();
  const starShape = shape(starColor);
  return `Scanners are detecting a new ${starColor} star (mark it with a ${starShape} on your star map (coming soon!))<br/>
It is ${distance()} light years away.<br/>
${signal() ? "There is a signal detected coming from this system!" : "No signals detected."}<br/>
This system does ${newRegion() ? "" : "not "} mark the beginning of a new region.`;
};

const planet = ({ atmosphere, biome, geology, name }) => `
Name: ${name()}<br/>
Atmosphere: ${atmosphere()}<br/>
Primary Biome: ${biome()}<br/>
Dominant Geology: ${geology()}`;

/**
 * @param {Function} thing
 * @param {Object} items
 */
export function displayThing(thing, items, screen = "displayScreen") {
  /** @type {string} */
  const stuffToDisplay = thing(items);
  const displayEl = document.getElementById(screen);
  if (displayEl) displayEl.innerHTML = stuffToDisplay;
}
/** @typedef {Object} DisplayThing
 * @property {([arg0]: Object) => void} loadingScreen
 * @property {(arg0: Object) => void} starSystem
 * @property {(arg0: Object) => void} planet
 * */

/** @type {DisplayThing} */
export const Display = {
  loadingScreen: (items) => displayThing(loadingScreen, items, "themeScreen"),
  starSystem: (items) => displayThing(starSystem, items),
  planet: (items) => displayThing(planet, items),
};
