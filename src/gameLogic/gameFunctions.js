import { makePlanet } from "../generators/planetData";
import { makeStarSystem } from "../generators/starData";
import { Display } from "../displays";
import { GameState } from "./gameState";

export function scanForSystems(quantity = 1) {
  while (quantity) {
    quantity--;
    const data = makeStarSystem.next().value;
    GameState.addSystem(data);
    Display.starSystem(data);
  }
}

export function scanForPlanets(quantity = 1) {
  while (quantity) {
    quantity--;
    const data = makePlanet.next(GameState.currentSystemId).value;
    GameState.addPlanet(data);
    Display.planet(data);
  }
}

export function listSystems() {
  for (let system of GameState.systems) {
    Display.starSystemShort(system);
  }
}

export function listPlanets() {
  for (let planet of GameState.planets) {
    Display.planetShort(planet);
  }
}
