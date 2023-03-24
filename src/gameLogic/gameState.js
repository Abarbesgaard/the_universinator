import { ProbeType } from "./gameEnums";

/** @type {GameStateType} */
export const GameStateDefault = {
  logs: [],
  messages: [],
  planets: [],
  systems: [],

  currentSystemId: 0,

  shipInfo: {
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

  addLog: (logItem) => GameState.logs.push(logItem),
  addMessage: (messageItem) => GameState.messages.push(messageItem),
  addPlanet: (planet) => GameState.planets.push(planet),
  addSystem: (system) => {
    GameState.systems.push(system);
  },
  getLogById: (logId) => GameState.logs.find((log) => log.id === logId),
  getMessageById: (messageId) => GameState.messages.find((message) => message.id === messageId),

  importSavedGame: (/** @type {GameStateType} */ savedGame) => {
    console.log("iSG called");
    GameState = { ...savedGame };
  },
  newGame: () => {
    console.log("nG called");
    GameState = { ...GameStateDefault };
  },
};

export let GameState = { ...GameStateDefault };
console.log("GameState init:", GameState);
