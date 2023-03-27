import { getRandomFrom } from "../utilities";

const name = () => {
  const regionNames = ["LZ1", "Flitz", "Bub", "Beel", "001"];
  return getRandomFrom(regionNames);
};

/** @returns {Generator<Region>} */
function* regionGenerator() {
  let id = 0;
  while (true) {
    yield {
      id: id++,
      name: name(),
    };
  }
}

export const makeRegion = regionGenerator();
