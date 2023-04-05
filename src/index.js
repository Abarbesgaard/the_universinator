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
      console.log("terminal");
      console.log("start args:", args);
      console.log("start cmd:", cmd);

      const commands = {
        clear: () => {
          terminal.clear();
          localforage.clear();
        },
        help: () => {
          return `Commands: help, scansystem, scanplanet;<br/>
capitalization doesn't matter, so "ScanSystem" and "scansystem" both work.`;
        },
        setname: (name) => {
          Game.setPlayerName(name);
        },
        setshipname: (name) => {
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

      if (args.length === 0) {
        if (cmd.toLowerCase() in commands) {
          cmd = cmd.toLowerCase();
        } else {
          args = cmd;
          cmd = Game.getNextCommand().toLowerCase();
        }
      }
      console.log("end cmd:", cmd);
      console.log("end args:", args);

      return commands[cmd](args);
    },
  }
);
