/** @type {GameState} */
export const GameState = {
  logs: [],
  messages: [],
  planets: [],
  systems: [],

  currentSystemId: 0,

  shipInfo: {
    probeQuantity: Infinity,
  },
  crewMembers: {
    science: {},
    tactical: {},
    engineering: {},
    medical: {},
    command: {}
  },

  addLog: (logItem) => GameState.logs.push(logItem),
  addMessage: (messageItem) => GameState.messages.push(messageItem),
  addPlanet: (planet) => GameState.planets.push(planet),
  addSystem: (system) => GameState.systems.push(system),
  getLogById: (logId) => GameState.logs.find((log) => log.id === logId),
  getMessageById: (messageId) => GameState.messages.find((message) => message.id === messageId),
};
