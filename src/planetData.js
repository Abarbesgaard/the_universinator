import { getRandom, rollDie, rollIndex } from "./utilities";

const planetNames1 = [
  "Dif",
  "Us",
  "Im",
  "Men",
  "Uk",
  "Sinh",
  "Fin",
  "Garb",
  "Arash",
  "Helh",
  "leh",
  "Otal",
  "Sic",
  "Jab",
  "Op",
  "Lil",
  "Ay",
  "Hb",
  "Nau",
  "Dev"
];

const planetNames2 = [
  "Lallo",
  "Hin",
  "Jev",
  "ViY",
  "Err",
  "Pol",
  "Kil",
  "Jil",
  "Lec",
  "ces",
  "xex",
  "Zet",
  "Tex",
  "Dog",
  "Cat",
  "Tank",
  "Wat",
  "Rrr",
  "Æ",
  "Ben"
];

const planetNames3 = [
  "Sin",
  "Fin",
  "alo",
  "Not",
  "Å",
  "Rot",
  "Vex",
  "Vax",
  "Xav",
  "Zex",
  "Klob",
  "Dog",
  "Ten",
  "Mo",
  "Wall",
  "all",
  "ottin",
  "Ulgh",
  "Shi",
  "Glad"
];

export function name() {
  const name1 = getRandom(planetNames1);
  const name2 = getRandom(planetNames2);
  const name3 = getRandom(planetNames3);
  return `${name1}${name2}${name3}`;
}

const planetBiomes = [
  "Lush",
  "Barren",
  "Dead",
  "Exotic",
  "Mega Exotic",
  "Scorched",
  "Frozen",
  "Toxic",
  "Marsh",
  "Volcanic"
];

export function biome() {
  return getRandom(planetBiomes);
}

const planetAtmospheres = [
  "Argon",
  "Carbon Dioxide",
  "Carbon monoxide",
  "Chlorine",
  "Chrysonite",
  "Di-hydrogen",
  "Dioxide",
  "Fluorine",
  "Helium",
  "Hyglese",
  "Methane",
  "Neon",
  "Nitrogen",
  "Not present",
  "Oxygen",
  "Oxygen",
  "Radnox",
  "Radon",
  "Sulphurine",
  "Thamium"
];

export function atmosphere() {
  return getRandom(planetAtmospheres);
}

const planetGeologies =[
 "Aberrant",  "Abhorrent",  "Volcanic",  "Vaulted",  "Upland Valley",  "Unnatural",  "Lurking Capstones",  "Undulating",  "Uncanny",  "Ultra-Magnetic",  "Towering Uplands",  "Tectonic Skeletons",  "Superconductive",  "Post-Glacial",  "Porous",  "Limestone",  "Kinematic",  "Irregular",  "Impermeable",  "Igneous",  "Hilly",  "Heteroclite",  "Heavily Metallic",  "Gorged",  "Geometric",  "Synthetic",  "Sunken Fissures",  "Sunken Colossi",  "Structural Valleys",  "Stone Monoliths",  "Sponge-like",  "Underground Caverns",  "Tectonic collisions",  "Shaped by Giants",  "Rocky",  "Riven",  "Rift Valleys",  "Recycled",  "Metamorphic",  "Latticed",  "Frequent Calderas",  "Fabricated",  "Extensive Meteor impacts",  "Electro-magnetic",  "Electro-dynamic",  "Deep Magma Chambers",  "Deep hollows",  "Deep Clefts",  "Deep Chasm",  "Cratered",  "Sloping",  "Sedimentary",  "Rocky Spires",  "Polygonal",  "Partially Organic",  "Regular Protusions",  "Snaking Protusions",  "Mountainous",  "Shaped by Comets",  "Monolithic",  "Metallic",  "Mathematic",  "Lurking Voids",  "Foliated",  "Exotic",  "Eroded Valleys",  "Deep salt layers",  "Extensive Underground Caverns",  "Dynamic",  "Divergent",  "Curiously Regular",  "Crystalline",  "Creeping Fissures",  "Computative",  "Cavernous",  "Rugged",  "Rolling Downs",  "Pillared",  "Oxidized",  "Non-porous",  "Multi-Dimensional",  "Montane",  "Mineral Rich",  "Meandering Faults",  "Uneven mineral distribution",  "Dense",  "Carved by ancient rivers",  "Buried Rifts",  "Bored-Out Internals",  "Bombarded",  "Blistered",  "Basalt Plumes",  "Artificially structured",  "Anti-Gravitational",  "Valley",  "Kinematic Stones",  "Shaped by rivers",  "Shaped by impacts",  "Extreme",  "Anomalous"];

export function geology() {
  return getRandom(planetGeologies);
}

export const getPlanet = {
  atmosphere,
  biome,
  geology,
  name
}