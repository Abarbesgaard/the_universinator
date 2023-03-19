/** @type {GameState} */
export const GameState = {
  logs: [],
  messages: [],
  systems: [],
  getLogById: (logId) => GameState.logs.find((log) => log.id === logId),
  getMessageById: (messageId) => GameState.messages.find((message) => message.id === messageId),
  addLog: (logItem) => GameState.logs.push(logItem),
  addMessage: (messageItem) => GameState.messages.push(messageItem),
};
