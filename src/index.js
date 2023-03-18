import "./styles.css";
import Terminal from "./terminal";
import { getPlanet } from "./planetData";
import { getSystem } from "./starData";
import { Display } from "./displays";

document.addEventListener("load", () => {
  Display.loadingScreen(null);
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
        },
        help: () => `Commands: clear, help,
NewSystem, NewStarName, NewSystemRace;
Capitalization doesn't matter, so "NewSystem" and "newsystem" both work.`,
        newsystem: () => {
          const data = getSystem;
          Display.loadingScreen(data);
        },
        newplanet: () => {
          const data = getPlanet;
          Display.planet(data);
        },
      };

      commands[cmd](args);
      return "";
    },
  }
);
