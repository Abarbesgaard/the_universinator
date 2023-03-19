import "./styles.css";
import Terminal from "./terminal";
import { makePlanet } from "./generators/planetData";
import { makeStarSystem } from "./generators/starData";
import { Display } from "./displays";
import { GameState } from "./gameLogic/gameState";

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
          const data = makeStarSystem.next().value;
          GameState.addSystem(data);
          Display.starSystem(data);
        },
        newplanet: () => {
          const data = makePlanet.next(GameState.currentSystemId).value;
          GameState.addPlanet(data);
          Display.planet(data);
        },
      };

      commands[cmd](args);
      return "";
    },
  }
);
