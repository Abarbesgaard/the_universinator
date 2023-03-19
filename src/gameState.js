/**
 * @typedef {Object} LoggedText
 * @property {number} id
 * @property {Date} timestamp
 * @property {string} text
 */

/**
 * @typedef {Object} GameState
 * @property {Map<number, LoggedText>} logs
 * @property {Map<number, LoggedText>} messages
 * @property {(logId: number) => LoggedText | undefined} getLogById
 * @property {(messageId: number) => LoggedText | undefined} getMessageById
 * @property {(logItem: LoggedText) => void} addLog
 * @property {(messageItem: LoggedText) => void} addMessage
 */

/** @type {GameState} */
export const GameState = {
  logs: new Map(),
  messages: new Map(),
  getLogById: (logId) => GameState.logs.get(logId),
  getMessageById: (messageId) => GameState.messages.get(messageId),
  addLog: (logItem) => GameState.logs.set(logItem.id, logItem),
  addMessage: (messageItem) => GameState.messages.set(messageItem.id, messageItem),
};
