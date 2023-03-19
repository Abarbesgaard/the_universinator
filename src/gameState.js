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
 * @property {(logId: number) => LoggedText | undefined} getLogById
 * @property {(messageId: number) => LoggedText | undefined} getMessageById
 * @property {(logItem: LoggedText) => void} addLog
 * @property {(messageItem: LoggedText) => void} addMessage
 */

/** @type {GameState} */
export const GameState = {
  logs: [],
  messages: [],
  getLogById: (logId) => GameState.logs.find((log) => log.id === logId),
  getMessageById: (messageId) => GameState.messages.find((message) => message.id === messageId),
  addLog: (logItem) => GameState.logs.push(logItem),
  addMessage: (messageItem) => GameState.messages.push(messageItem),
};
