const name = (id) => {
  const regionNames = [
    "Temple of Apollo",
    "Palace of Zeus",
    "Garden of Aphrodite",
    "River of Hades",
    "Cave of Pan",
    "Mountain of Artemis",
    "Forest of Demeter",
    "Lake of Poseidon",
    "Field of Ares",
    "City of Athena",
    "Road of Hermes",
    "Bridge of Hecate",
    "Tower of Odin",
    "Hall of Valhalla",
    "Field of Fafnir",
    "Mountain of Yggdrasil",
    "Cave of Jötunheim",
    "Forest of Niflheim",
    "Lake of Mimir",
    "River of Slidr",
    "Island of Manannán mac Lir",
    "Fortress of Brigid",
    "Palace of Lugh",
    "Farm of Dagda",
    "Cauldron of Morrigan",
    "Chariot of Apollo",
    "Bow of Artemis",
    "Owl of Athena",
    "Thunderbolt of Zeus",
    "Spear of Ares",
    "River Styx",
    "Forge of Hephaestus",
    "Cornucopia of Demeter",
    "Trident of Poseidon",
    "Caduceus of Hermes",
    "Torch of Hecate",
    "Gjallarhorn of Odin",
    "Sword of Fafnir",
    "World Tree Yggdrasil",
    "Gates of Jötunheim",
    "Mists of Niflheim",
    "Well of Mimir",
    "River of Slidr",
    "Isle of Manannán mac Lir",
    "Triple Spiral of Brigid",
    "Silver Spear of Lugh",
    "Cauldron of Dagda",
    "Raven of Morrigan",
    "Thyrsus of Dionysus",
    "Cave of Pan",
  ];
  return regionNames[id] || `Uncharted Region ${id}`;
};

/** @returns {Generator<Region>} */
function* regionGenerator() {
  let id = 0;
  while (true) {
    yield {
      id: id++,
      name: name(id),
    };
  }
}

export const makeRegion = regionGenerator();
