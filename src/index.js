import "./styles.css";
import Terminal from "./terminal";
import { listPlanets, listSystems, scanForPlanets, scanForSystems } from "./gameLogic/gameFunctions";

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
        },
        help: () => {
          return `Commands: clear, help,<br/>
ScanSystem, ScanPlanet;<br/>
capitalization doesn't matter, so "ScanSystem" and "scansystem" both work.`;
        },
        scansystem: () => {
          scanForSystems(1);
        },
        listsystems: () => {
          listSystems();
        },
        scanplanet: () => {
          scanForPlanets(1);
        },
        listplanets: () => {
          listPlanets();
        },
      };

      commands[cmd](args);
      return "";
    },
  }
);
