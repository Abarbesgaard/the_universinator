import { makePlanet } from "../generators/planetData";
import { makeStarSystem } from "../generators/starData";
import { Display } from "../displays/displays";
import { GameProgressState, GameState, importSavedGame as loadSavedGame, newGame as startNewGame } from "./gameState";
import localforage from "localforage";
import { makeRegion } from "../generators/regionData";

function generateNewRegion() {
  const region = makeRegion.next().value;
  addRegion(region);
  GameState.currentRegionId = region.id;
  return region;
}

function scanForSystems(quantity = 1) {
  do {
    quantity--;
    const data = makeStarSystem.next().value;
    console.log("GameState:", GameState);
    addSystem(data);
    Display.starSystem(data);
  } while (quantity > 0);
  if (GameState.currentProgress === GameProgressState.scanSystem) {
    Display.systemScanned();
  }
  saveGame();
}

function listSystemsInRegion() {
  for (let system of GameState.systems) {
    if (GameState.currentRegionId === system.regionId) {
      Display.starSystemShort(system);
    }
  }
}

function scanForPlanets(quantity = 1) {
  do {
    quantity--;
    const data = makePlanet.next(GameState.currentSystemId).value;
    addPlanet(data);
    Display.planet(data);
  } while (quantity > 0);
  saveGame();
}

function listPlanetsInSystem() {
  for (let planet of GameState.planets) {
    if (GameState.currentSystemId === planet.systemId) {
      Display.planetShort(planet);
    }
  }
}

function newGame() {
  startNewGame();
  Display.newGameMessage();
}

function importSavedGame(val) {
  loadSavedGame(val);
  Display.loadedGameMessage();
}

function saveGame() {
  localforage.setItem("GameState", GameState);
}

function setPlayerName(name) {
  GameState.playerName = name;
  saveGame();
  Display.nameEnteredMessage(name);
}

function setShipName(name) {
  GameState.shipInfo.name = name;
  saveGame();
  Display.shipNameSaved();
}

const addLog = (logItem) => GameState.logs.push(logItem);
const addMessage = (messageItem) => GameState.messages.push(messageItem);
const addPlanet = (planet) => GameState.planets.push(planet);
const addRegion = (region) => GameState.regions.push(region);
const addSystem = (system) => GameState.systems.push(system);

const getCrewNames = () => {
  const ScienceOfficer = GameState.crewMembers.science.name;
  const EngineeringOfficer = GameState.crewMembers.engineering.name;
  const MedicalOfficer = GameState.crewMembers.medical.name;
  const TacticalOfficer = GameState.crewMembers.tactical.name;
  return {
    ScienceOfficer,
    EngineeringOfficer,
    MedicalOfficer,
    TacticalOfficer,
  };
};

const getNextCommand = () => {
  console.log("getNextCommand gamestate:", GameState);
  const { nextCommand } = GameState.currentProgress;
  GameState.currentProgress = GameProgressState[nextCommand];
  return nextCommand;
};

const getLogById = (logId) => GameState.logs.find((log) => log.id === logId);
const getMessageById = (messageId) => GameState.messages.find((message) => message.id === messageId);
const getShipName = () => GameState.shipInfo.name;

/** @type {GameFunctions} */
export const Game = {
  addLog,
  addMessage,
  addPlanet,
  addRegion,
  addSystem,
  generateNewRegion,
  getCrewNames,
  getLogById,
  getMessageById,
  getNextCommand,
  getShipName,
  importSavedGame,
  listPlanetsInSystem,
  listSystemsInRegion,
  newGame,
  saveGame,
  scanForPlanets,
  scanForSystems,
  setPlayerName,
  setShipName,
};
