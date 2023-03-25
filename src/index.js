import "./styles.css";
import Terminal from "./terminal";
import { Game } from "./gameLogic/gameFunctions";
import localforage from "localforage";

localforage.getItem("GameState", (err, val) => {
  if (val === null) {
    Game.newGame();
  } else {
    Game.importSavedGame(val);
  }
});

// @ts-ignore
var terminal = new Terminal(
  "terminal",
  {},
  {
    execute: function (/** @type {string} */ cmd, /** @type {any} */ args) {
      // Lowercase the command to reduce likelihood of typos
      cmd = cmd.toLowerCase();

      const commands = {
        clear: () => {
          terminal.clear();
          localforage.clear();
        },
        help: () => {
          return `Commands: clear, help,<br/>
ScanSystem, ScanPlanet;<br/>
capitalization doesn't matter, so "ScanSystem" and "scansystem" both work.`;
        },
        shipname: (name) => {
          Game.setShipName(name);
        },
        scansystem: (quantity = 1) => {
          Game.scanForSystems(quantity);
        },
        listsystems: () => {
          Game.listSystems();
        },
        scanplanet: (quantity = 1) => {
          Game.scanForPlanets(quantity);
        },
        listplanets: () => {
          Game.listPlanets();
        },
      };

      commands[cmd](args);
      return "";
    },
  }
);
