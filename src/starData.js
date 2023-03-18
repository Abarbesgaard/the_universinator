import { getRandomFrom, rollDie } from "./utilities";

function color() {
  const starColors = ["Yellow", "Yellow", "Yellow", "Red", "Red", "Green", "Green", "Blue"];

  return getRandomFrom(starColors);
}

function shape(color) {
  const starShapes = { Yellow: "Circle", Red: "Square", Green: "Triangle", Blue: "Double Circle" };

  return starShapes[color];
}

/* cSpell:disable */
function name() {
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

  const name1 = getRandomFrom(starNames1);
  const name2 = getRandomFrom(starNames2);
  const name3 = getRandomFrom(starNames3);

  return `${name1}${name2}${name3}`;
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
  return d20Roll === 20 ? "Yes" : "No";
}

export const getSystem = {
  color,
  distance: () => rollDie(6),
  newRegion: () => (rollDie(6) >= 5 ? "Yes" : "No"),
  shape,
  signal,
};
