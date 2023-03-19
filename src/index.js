import "./styles.css";
import Terminal from "./terminal";
import { scanForPlanets, scanForSystems } from "./gameLogic/gameFunctions";

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
        scanplanet: () => {
          scanForPlanets(1);
        },
      };

      commands[cmd](args);
      return "";
    },
  }
);
