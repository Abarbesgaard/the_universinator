import { ProbeType } from "./gameEnums";

/** @type {GameStateType} */
export const GameStateDefault = {
  logs: [],
  messages: [],
  planets: [],
  regions: [],
  systems: [],

  currentSystemId: 0,
  currentRegionId: 0,

  shipInfo: {
    name: "",
    probeQuantity: Infinity,
  },
  crewMembers: {
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
  },
};

export let GameState = { ...GameStateDefault };

export const importSavedGame = (/** @type {GameStateType} */ savedGame) => {
  console.log("iSG called");
  GameState = { ...savedGame };
};
export const newGame = () => {
  console.log("nG called");
  GameState = { ...GameStateDefault };
};
