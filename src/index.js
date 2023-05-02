import "./styles.css";
import Terminal from "./terminal";
import { Game } from "./gameLogic/gameFunctions";

const commands = {
  clear: () => {
    terminal.clear();
  },
  help: () => {
    return `Commands: help, NewRegion, NewSystem, NewPlanet;<br/>
capitalization doesn't matter, so "NewSystem" and "newsystem" both work.`;
  },
  newregion: () => {
    Game.generateNewRegion();
  },
  newsystem: (quantity = 1) => {
    Game.scanForSystems(quantity);
  },
  newplanet: (quantity = 1) => {
    Game.scanForPlanets(quantity);
  },
};

// @ts-ignore
var terminal = new Terminal(
  "terminal",
  {},
  {
    execute: function (/** @type {string} */ cmd, /** @type {any} */ args) {
      cmd = cmd.toLowerCase();

      return commands[cmd](args);
    },
  }
);
