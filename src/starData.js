import { getRandom, rollDie, rollIndex } from "./utilities";

const starColors = ["Yellow", "Yellow", "Yellow", "Red", "Red", "Green", "Green", "Blue"];

const starShapes = {"Yellow": "Circle", "Red": "Square", "Green": "Triangle", "Blue": "Double Circle"};

function color() {
  return getRandom(starColors);
}

function shape(color) {
  return starShapes[color];
}

const starNames1 = [
  "Leave",
  "J72",
  "YYGG",
  "<<",
  ">>",
  "G76",
  "Lat",
  "Garb",
  "//",
  "Mek",
  "*",
  "Star",
  "16/",
  "Pen",
  "Dont",
  "Zenk",
  "Tul",
  "Tup",
  "3xx3",
  "(...)",
];

const starNames2 = [
  "152",
  "-",
  "756",
  "XXXX",
  "Ycct",
  "H61",
  "VVek",
  "--",
  "/",
  "Tin",
  "**",
  "Broken",
  "16/",
  "Nope",
  "go",
  "Needed",
  "Fish",
  "Tu",
  "5&7",
  "###",
];

const starNames3 = [
  "BH",
  "N53",
  "156",
  ">>",
  "<<",
  "B7132",
  "Gish",
  "--",
  "/-",
  "*",
  "Flash",
  "16.6",
  "16/",
  "Out",
  "here",
  "Now",
  "Head",
  "ilsh",
  "(...)",
  "&&",
];

function name() {
  const name1 = getRandom(starNames1);
  const name2 = getRandom(starNames2);
  const name3 = getRandom(starNames3);
  return `${name1}${name2}${name3}`;
}

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

function race() {
  return getRandom(systemRaces);
}

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

function economy() {
  return getRandom(systemEconomies);
}

const conflictTypes = ["Low", "Low", "Low", "Medium", "Medium", "High"];

function conflictType() {
  return getRandom(conflictTypes);
}

const LowConflictDescriptions = [
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
];

const MediumConflictDescriptions = [
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
];

const HighConflictDescriptions = [
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
];

/** @param {string} conflictType */
function conflictDescription(conflictType) {
  const ConflictTypesMap = {
    Low: LowConflictDescriptions,
    Medium: MediumConflictDescriptions,
    High: HighConflictDescriptions,
  };

  return getRandom(ConflictTypesMap[conflictType]);
}

export function getSystem() {
  const distance = rollDie(6);
  const d20Roll = rollDie(20);
  const signal = d20Roll === 20 ? "Yes" : "No";
  const newRegion = rollDie(6) >= 5 ? "Yes" : "No";
  return { color, shape, distance, signal, newRegion };
}
