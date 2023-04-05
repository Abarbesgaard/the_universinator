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
 * @property {Array<Region>} regions
 * @property {Array<StarSystem>} systems
 *
 * @property {string} playerName
 *
 * @property {object} currentProgress
 * @property {number} currentRegionId
 * @property {number} currentSystemId
 * @property {number} currentTick
 *
 * @property {ShipInfo} shipInfo
 * @property {CrewMembersObject} crewMembers
 */

/**
 * @typedef {Object} ShipInfo
 * @property {string} name
 * @property {Number} probeQuantity
 */

/**
 * @typedef {Object} CrewMembersObject
 * @property {CrewMember} science
 * @property {CrewMember} engineering
 * @property {CrewMember} medical
 * @property {CrewMember} tactical
 */

/**
 * @typedef {Object} CrewMember
 * @property {string} name
 * @property {string} bonusType
 */

/**
 * @typedef {Object} GameFunctions
 * @property {(logItem: LoggedText) => void} addLog
 * @property {(messageItem: LoggedText) => void} addMessage
 * @property {(planet: Planet) => void} addPlanet
 * @property {(region: Region) => void} addRegion
 * @property {(system: StarSystem) => void} addSystem
 * @property {() => Region} generateNewRegion
 * @property {() => {[x: string]: CrewMember["name"]}} getCrewNames
 * @property {(logId: number) => LoggedText | undefined} getLogById
 * @property {(messageId: number) => LoggedText | undefined} getMessageById
 * @property {() => string} getNextCommand
 * @property {() => string} getShipName
 * @property {(savedGame: GameStateType) => void} importSavedGame
 * @property {() => void} listPlanetsInSystem
 * @property {() => void} listSystemsInRegion
 * @property {() => void} newGame
 * @property {() => void} saveGame
 * @property {(quantity: number) => void} scanForPlanets
 * @property {(quantity: number) => void} scanForSystems
 * @property {(name: string) => void} setPlayerName
 * @property {(name: string) => void} setShipName
 */

/**
 * @typedef {Object} DisplayThing
 * @property {() => void} loadedGameMessage
 * @property {(name: string) => void} nameEnteredMessage
 * @property {() => void} newGameMessage
 * @property {(item: Planet) => void} planet
 * @property {(item: Planet) => void} planetShort
 * @property {() => void} shipNameSaved
 * @property {(item: StarSystem) => void} starSystem
 * @property {(item: StarSystem) => void} starSystemShort
 */

/**
 * @typedef {Object} StarSystem
 * @property {number} id
 * @property {number} regionId
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
 * @property {number} systemId
 * @property {string} atmosphere
 * @property {string} biome
 * @property {string} geology
 * @property {string} name
 * @property {number} systemId
 */

/**
 * @typedef {Object} Region
 * @property {number} id
 * @property {string} name
 */
