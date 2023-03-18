const loadingScreen = () => `
███████ ████████ ███████ ███████ ██      ███████  ██████  █████  ███    ██
██         ██    ██      ██      ██      ██      ██      ██   ██ ████   ██
███████    ██    █████   █████   ██      ███████ ██      ███████ ██ ██  ██
     ██    ██    ██      ██      ██           ██ ██      ██   ██ ██  ██ ██
███████    ██    ███████ ███████ ███████ ███████  ██████ ██   ██ ██   ████`;

const starSystem = ({ color, shape, distance, signal, newRegion }) => `
Type: ${color()} (${shape()})
Distance: ${distance()} units away
Signal detected: ${signal()}
New region: ${newRegion()}`;

const planet = ({ atmosphere, biome, geology, name }) => `
Name: ${name()}
Atmosphere: ${atmosphere()}
Primary Biome: ${biome()}
Dominant Geology: ${geology()}`;

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
 * @property {([arg0]: Object) => void} loadingScreen
 * @property {(arg0: Object) => void} starSystem
 * @property {(arg0: Object) => void} planet
 * */

/** @type {DisplayThing} */
export const Display = {
  loadingScreen: (items) => displayThing(loadingScreen, items),
  starSystem: (items) => displayThing(starSystem, items),
  planet: (items) => displayThing(planet, items),
};
