import { makePlanet } from "../generators/planetData";
import { makeStarSystem } from "../generators/starData";
import { Display } from "../displays";
import { GameState, importSavedGame, newGame as startNewGame } from "./gameState";
import localforage from "localforage";

function scanForSystems(quantity = 1) {
  do {
    quantity--;
    const data = makeStarSystem.next().value;
    console.log("GameState:", GameState);
    addSystem(data);
    Display.starSystem(data);
  } while (quantity > 0);
  saveGame();
}

function listSystems() {
  for (let system of GameState.systems) {
    Display.starSystemShort(system);
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

function listPlanets() {
  for (let planet of GameState.planets) {
    Display.planetShort(planet);
  }
}

function newGame() {
  startNewGame();
  Display.newGameMessage();
}

function saveGame() {
  localforage.setItem("GameState", GameState);
}

function setShipName(name) {
  GameState.shipInfo.name = name;
  saveGame();
  Display.shipNameSaved();
}

const addLog = (logItem) => GameState.logs.push(logItem);
const addMessage = (messageItem) => GameState.messages.push(messageItem);
const addPlanet = (planet) => GameState.planets.push(planet);
const addSystem = (system) => {
  GameState.systems.push(system);
};
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
const getLogById = (logId) => GameState.logs.find((log) => log.id === logId);
const getMessageById = (messageId) => GameState.messages.find((message) => message.id === messageId);
const getShipName = () => GameState.shipInfo.name;

/** @type {GameFunctions} */
export const Game = {
  addLog,
  addMessage,
  addPlanet,
  addSystem,
  getCrewNames,
  getLogById,
  getMessageById,
  getShipName,
  importSavedGame,
  listPlanets,
  listSystems,
  newGame,
  saveGame,
  scanForPlanets,
  scanForSystems,
  setShipName,
};
