const loadingScreen = () => `
███████ ████████ ███████ ███████ ██      ███████  ██████  █████  ███    ██<br/>
██         ██    ██      ██      ██      ██      ██      ██   ██ ████   ██<br/>
███████    ██    █████   █████   ██      ███████ ██      ███████ ██ ██  ██<br/>
     ██    ██    ██      ██      ██           ██ ██      ██   ██ ██  ██ ██<br/>
███████    ██    ███████ ███████ ███████ ███████  ██████ ██   ██ ██   ████`;

const starSystem = ({ color, shape, distance, signal, newRegion }) => {
  const starColor = color();
  const starShape = shape(starColor);
  return `Type: ${starColor} (${starShape})<br/>
Distance: ${distance()} units away<br/>
Signal detected: ${signal()}<br/>
New region: ${newRegion()}`;
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
