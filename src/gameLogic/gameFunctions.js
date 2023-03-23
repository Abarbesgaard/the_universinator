import { makePlanet } from "../generators/planetData";
import { makeStarSystem } from "../generators/starData";
import { Display } from "../displays";
import { GameState } from "./gameState";

function scanForSystems(quantity = 1) {
  while (quantity) {
    quantity--;
    const data = makeStarSystem.next().value;
    GameState.addSystem(data);
    Display.starSystem(data);
  }
}

function scanForPlanets(quantity = 1) {
  while (quantity) {
    quantity--;
    const data = makePlanet.next(GameState.currentSystemId).value;
    GameState.addPlanet(data);
    Display.planet(data);
  }
}

function listSystems() {
  for (let system of GameState.systems) {
    Display.starSystemShort(system);
  }
}

function listPlanets() {
  for (let planet of GameState.planets) {
    Display.planetShort(planet);
  }
}

/** @type {GameFunctions} */
export const Game = {
  listPlanets,
  listSystems,
  scanForPlanets,
  scanForSystems,
};
