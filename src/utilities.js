// Returns a number between 1 and max
function rollDie(max) {
  return Math.floor(Math.random() * max + 1);
}

// Returns a number between 0 and (max - 1), useful for array indexes
function rollIndex(max) {
  return Math.floor(Math.random() * max);
}

// Returns a random entry from an array
/** @param {any[]} thing */
function getRandomFrom(thing) {
  return thing[rollIndex(thing.length)];
}

export { getRandomFrom, rollDie, rollIndex };
