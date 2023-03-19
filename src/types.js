/**
 * @typedef {Object} LoggedText
 * @property {number} id
 * @property {Date} timestamp
 * @property {string} text
 */

/**
 * @typedef {Object} GameState
 * @property {Array<LoggedText>} logs
 * @property {Array<LoggedText>} messages
 * @property {Array<StarSystem>} systems
 * @property {(logId: number) => LoggedText | undefined} getLogById
 * @property {(messageId: number) => LoggedText | undefined} getMessageById
 * @property {(logItem: LoggedText) => void} addLog
 * @property {(messageItem: LoggedText) => void} addMessage
 */

/**
 * @typedef {Object} StarSystem
 * @property {string} conflictDescription
 * @property {string} conflictType
 * @property {string} color
 * @property {number} distance
 * @property {string} economy
 * @property {boolean} newRegion
 * @property {Array<Planet>} planets
 * @property {string} race
 * @property {string} shape
 * @property {boolean} signalDetected
 * @property {boolean} signalExplored
 */

/**
 * @typedef {Object} Planet
 * @property {string} atmosphere
 * @property {string} biome
 * @property {string} geology
 * @property {string} name
 */
