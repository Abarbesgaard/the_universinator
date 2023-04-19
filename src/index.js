import "./styles.css";
import Terminal from "./terminal";
import { Game } from "./gameLogic/gameFunctions";
import localforage from "localforage";
import { GameState } from "./gameLogic/gameState";

localforage.getItem("GameState", (err, val) => {
  if (val === null) {
    Game.newGame();
  } else {
    Game.importSavedGame(val);
  }
});

const commands = {
  clear: () => {
    terminal.clear();
    localforage.clear();
  },
  help: () => {
    return `Commands: help, scansystem, scanplanet;<br/>
capitalization doesn't matter, so "ScanSystem" and "scansystem" both work.`;
  },
  setname: (/** @type {string} */ name) => {
    Game.setPlayerName(name);
  },
  setshipname: (/** @type {string} */ name) => {
    Game.setShipName(name);
  },
  scansystem: (quantity = 1) => {
    Game.scanForSystems(quantity);
  },
  listsystems: () => {
    Game.listSystemsInRegion();
  },
  scanplanet: (quantity = 1) => {
    Game.scanForPlanets(quantity);
  },
  listplanets: () => {
    Game.listPlanetsInSystem();
  },
};

// @ts-ignore
var terminal = new Terminal(
  "terminal",
  {},
  {
    execute: function (/** @type {string} */ cmd, /** @type {any} */ args) {
      if (args.length === 0) {
        const next = Game.getNextCommand();
        if (next) {
          args = cmd;
          cmd = next;
        }
      }
      cmd = cmd.toLowerCase();

      if (cmd === "display" && args.length > 0) {
        cmd = args[0].split("_")[0];
        args = args[0].split("_").shift().join("_");
      }

      return commands[cmd](args);
    },
  }
);
