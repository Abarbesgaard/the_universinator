import { getRandomFrom } from "../utilities";

function atmosphere() {
  /* cSpell:disable */
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
    "Thamium",
  ];

  return getRandomFrom(planetAtmospheres);
}

function biome() {
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
    "Volcanic",
  ];

  return getRandomFrom(planetBiomes);
}

function geology() {
  const planetGeologies = [
    "Aberrant",
    "Abhorrent",
    "Anomalous",
    "Anti-Gravitational",
    "Artificially structured",
    "Basalt Plumes",
    "Blistered",
    "Bombarded",
    "Bored-Out Internals",
    "Buried Rifts",
    "Carved by ancient rivers",
    "Cavernous",
    "Computative",
    "Cratered",
    "Creeping Fissures",
    "Crystalline",
    "Curiously Regular",
    "Deep Chasm",
    "Deep Clefts",
    "Deep hollows",
    "Deep Magma Chambers",
    "Deep salt layers",
    "Dense",
    "Divergent",
    "Dynamic",
    "Electro-dynamic",
    "Electro-magnetic",
    "Eroded Valleys",
    "Exotic",
    "Extensive Meteor impacts",
    "Extensive Underground Caverns",
    "Extreme",
    "Fabricated",
    "Foliated",
    "Frequent Calderas",
    "Geometric",
    "Gorged",
    "Heavily Metallic",
    "Heteroclite",
    "Hilly",
    "Igneous",
    "Impermeable",
    "Irregular",
    "Kinematic Stones",
    "Kinematic",
    "Latticed",
    "Limestone",
    "Lurking Capstones",
    "Lurking Voids",
    "Mathematic",
    "Meandering Faults",
    "Metallic",
    "Metamorphic",
    "Mineral Rich",
    "Monolithic",
    "Montane",
    "Mountainous",
    "Multi-Dimensional",
    "Non-porous",
    "Oxidized",
    "Partially Organic",
    "Pillared",
    "Polygonal",
    "Porous",
    "Post-Glacial",
    "Recycled",
    "Regular Protusions",
    "Rift Valleys",
    "Riven",
    "Rocky Spires",
    "Rocky",
    "Rolling Downs",
    "Rugged",
    "Sedimentary",
    "Shaped by Comets",
    "Shaped by Giants",
    "Shaped by impacts",
    "Shaped by rivers",
    "Sloping",
    "Snaking Protusions",
    "Sponge-like",
    "Stone Monoliths",
    "Structural Valleys",
    "Sunken Colossi",
    "Sunken Fissures",
    "Superconductive",
    "Synthetic",
    "Tectonic collisions",
    "Tectonic Skeletons",
    "Towering Uplands",
    "Ultra-Magnetic",
    "Uncanny",
    "Underground Caverns",
    "Undulating",
    "Uneven mineral distribution",
    "Unnatural",
    "Upland Valley",
    "Valley",
    "Vaulted",
    "Volcanic",
  ];

  return getRandomFrom(planetGeologies);
}

function name() {
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
    "Dev",
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
    "Ben",
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
    "Glad",
  ];

  const name1 = getRandomFrom(planetNames1);
  const name2 = getRandomFrom(planetNames2);
  const name3 = getRandomFrom(planetNames3);

  return `${name1}${name2}${name3}`;
}

/** @returns {Generator<Planet>} */
function* planetGenerator(systemId) {
  let id = 0;
  while (true) {
    yield {
      id: id++,
      atmosphere: atmosphere(),
      biome: biome(),
      geology: geology(),
      name: name(),
      systemId,
    };
  }
}

export const makePlanet = planetGenerator();
