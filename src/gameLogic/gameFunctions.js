import { makePlanet } from "../generators/planetData";
import { makeStarSystem } from "../generators/starData";
import { Display } from "../displays";
import { GameState } from "./gameState";

function scanForSystems(quantity = 1) {
  do {
    quantity--;
    const data = makeStarSystem.next().value;
    console.log("GameState:", GameState);
    GameState.addSystem(data);
    Display.starSystem(data);
  } while (quantity > 0);
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
    GameState.addPlanet(data);
    Display.planet(data);
  } while (quantity > 0);
}

function listPlanets() {
  for (let planet of GameState.planets) {
    Display.planetShort(planet);
  }
}

function importSavedGame(savedGame) {
  GameState.importSavedGame(savedGame);
}

function newGame() {
  GameState.newGame();
  // TODO: Also trigger "new game" messages
}

/** @type {GameFunctions} */
export const Game = {
  importSavedGame,
  newGame,
  listPlanets,
  listSystems,
  scanForPlanets,
  scanForSystems,
};
