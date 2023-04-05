import { ProbeType } from "./gameEnums";

export const GameProgressState = {
  newGame: {
    nextCommand: "setName",
  },
  setName: {
    nextCommand: "setShipName",
  },
  setShipName: {
    nextCommand: "scansystem",
  },
};

const crewMembers = {
  science: {
    name: "Sam",
    bonusType: ProbeType.science,
  },
  tactical: {
    name: "Tom",
    bonusType: ProbeType.tactical,
  },
  engineering: {
    name: "Eve",
    bonusType: ProbeType.engineering,
  },
  medical: {
    name: "Mab",
    bonusType: ProbeType.medical,
  },
};

/** @type {GameStateType} */
export const GameStateDefault = {
  logs: [],
  messages: [],
  planets: [],
  regions: [{ id: 0, name: "LZ1" }],
  systems: [],

  playerName: "",

  currentProgress: GameProgressState.newGame,
  currentRegionId: 0,
  currentSystemId: 0,
  currentTick: 0,

  shipInfo: {
    name: "",
    probeQuantity: Infinity,
  },
  crewMembers,
};

export let GameState = { ...GameStateDefault };

export const importSavedGame = (/** @type {GameStateType} */ savedGame) => {
  console.log("savedGame:", savedGame);
  GameState = { ...savedGame };
};
export const newGame = () => {
  console.log("nG called");
  GameState = { ...GameStateDefault };
};
