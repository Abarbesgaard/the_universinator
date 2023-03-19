import "./styles.css";
import Terminal from "./terminal";
import { planetGenerator } from "./generators/planetData";
import { starSystemGenerator } from "./generators/starData";
import { Display } from "./displays";

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
NewSystem, NewPlanet;<br/>
capitalization doesn't matter, so "NewSystem" and "newsystem" both work.`;
        },
        newsystem: () => {
          const data = starSystemGenerator;
          Display.starSystem(data);
        },
        newplanet: () => {
          const data = planetGenerator;
          Display.planet(data);
        },
      };

      commands[cmd](args);
      return "";
    },
  }
);
