/**
 * @typedef {Object} LoggedText
 * @property {number} id
 * @property {Date} timestamp
 * @property {string} text
 */

/**
 * @typedef {Object} GameStateType
 * @property {Array<LoggedText>} logs
 * @property {Array<LoggedText>} messages
 * @property {Array<Planet>} planets
 * @property {Array<StarSystem>} systems
 *
 * @property {number} currentSystemId
 *
 * @property {ShipInfo} shipInfo
 * @property {{[x:string]: CrewMember}} crewMembers
 *
 * @property {(logItem: LoggedText) => void} addLog
 * @property {(messageItem: LoggedText) => void} addMessage
 * @property {(planet: Planet) => void} addPlanet
 * @property {(system: StarSystem) => void} addSystem
 * @property {(logId: number) => LoggedText | undefined} getLogById
 * @property {(messageId: number) => LoggedText | undefined} getMessageById
 */

/**
 * @typedef {Object} ShipInfo
 * @property {Number} probeQuantity
 */

/**
 * @typedef {Object} CrewMember
 * @property {string} name
 * @property {string} bonusType
 */

/** @typedef {Object} GameFunctions
 * @property {() => void} listPlanets
 * @property {() => void} listSystems
 * @property {(quantity: number) => void} scanForPlanets
 * @property {(quantity: number) => void} scanForSystems
 */

/**
 * @typedef {Object} StarSystem
 * @property {number} id
 * @property {string} conflictDescription
 * @property {string} conflictType
 * @property {string} color
 * @property {number} distance
 * @property {string} economy
 * @property {string} name
 * @property {boolean} newRegion
 * @property {Array<Planet>} planets
 * @property {string} race
 * @property {string} shape
 * @property {boolean} signalDetected
 * @property {boolean} signalExplored
 */

/**
 * @typedef {Object} Planet
 * @property {number} id
 * @property {string} atmosphere
 * @property {string} biome
 * @property {string} geology
 * @property {string} name
 * @property {number} systemId
 */
