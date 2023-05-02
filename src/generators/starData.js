import { Game } from "../gameLogic/gameFunctions";
import { GameState } from "../gameLogic/gameState";
import { getRandomFrom, rollDie } from "../utilities";

function color() {
  const starColors = ["Yellow", "Yellow", "Yellow", "Red", "Red", "Green", "Green", "Blue"];

  return getRandomFrom(starColors);
}

function shape(color) {
  const starShapes = { Yellow: "Circle", Red: "Square", Green: "Triangle", Blue: "Double Circle" };

  return starShapes[color];
}

/* cSpell:disable */
function name(regionId, race) {
  const { name: regionName } = GameState.regions[regionId];
  let duplicate = false;
  let starName = "";
  do {
    starName = `${regionName}-${race}-${rollDie(99999)}`;
    // Searches through the current list of systems to ensure we don't add a new system with the same name as a previous system (a 1:20000 chance, if not lower, but not impossible either)
    duplicate = GameState.systems.reduce((found, star) => {
      if (star.name === starName) {
        found === true;
      }
      return found;
    }, false);
  } while (duplicate);
  return starName;
}

function race() {
  const systemRaces = [
    "Gekin",
    "Asleon",
    "Olrid",
    "Kanes",
    "Phakrine",
    "Vaxerant",
    "Utinit",
    "Odalese",
    "Yearrish",
    "Geoguine",
    "Itobat",
    "Cevesin",
    "Chemite",
    "Qiander",
    "Brulid",
    "Benander",
    "Shanean",
    "Krudmite",
    "Rirririar",
    "Saluander",
  ];

  return getRandomFrom(systemRaces);
}

function economy() {
  const systemEconomies = [
    "Declining",
    "Destitute",
    "Low Supply",
    "Comfortable",
    "Developing",
    "Medium supply",
    "Flourishing",
    "Wealthy",
  ];

  return getRandomFrom(systemEconomies);
}

function conflictType() {
  const conflictTypes = ["Low", "Low", "Low", "Medium", "Medium", "High"];

  return getRandomFrom(conflictTypes);
}

/** @param {string} conflictType */
function conflictDescription(conflictType) {
  const ConflictTypesMap = {
    Low: [
      "Gentle",
      "Low",
      "Mild",
      "Peaceful",
      "Relaxed",
      "Stable",
      "Tranquil",
      "Trivial",
      "Unthreatening",
      "Untroubled",
    ],
    Medium: [
      "Belligerent",
      "Boisterous",
      "Fractious",
      "Intermittent",
      "Medium",
      "Rowdy",
      "Sporadic",
      "Testy",
      "Unruly",
      "Unstable",
    ],
    High: [
      "Aggressive",
      "Alarming",
      "At War",
      "Critical",
      "Dangerous",
      "Destructive",
      "Formidable",
      "High",
      "Lawless",
      "Perilous",
    ],
  };

  return getRandomFrom(ConflictTypesMap[conflictType]);
}

function signal() {
  const d20Roll = rollDie(20);
  return d20Roll === 20;
}

/** @returns {Generator<StarSystem>} */
function* starSystemGenerator() {
  let id = 0;

  while (true) {
    let conflict = conflictType();
    let thisColor = color();
    let thisRace = race();
    const newRegion = rollDie(6) >= 5;
    const regionId = GameState.currentRegionId;

    yield {
      id: id++,
      conflictDescription: conflictDescription(conflict),
      conflictType: conflict,
      color: thisColor,
      distance: rollDie(6),
      economy: economy(),
      name: name(regionId, thisRace),
      newRegion,
      planets: [],
      race: thisRace,
      regionId,
      shape: shape(thisColor),
      signalDetected: signal(),
      signalExplored: false,
    };
  }
}

export const makeStarSystem = starSystemGenerator();
