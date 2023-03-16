import "./styles.css";
import Terminal from "./terminal";
import * as Get from "./starData";
import * as Templ from "./templates";

var terminal = new Terminal(
  "terminal",
  {},
  {
    execute: function (cmd, args) {
      // Hide Loading Screen if still visible
      const loader = document.getElementById("loadingScreen");
      if (loader) loader.remove();

      // Lowercase the command to reduce likelihood of typos
      cmd = cmd.toLowerCase();

      switch (cmd) {
        case "clear":
          terminal.clear();
          return "";

        case "help":
          return `Commands: clear, help,
NewSystem, NewStarName, NewSystemRace;
Capitalization doesn't matter, so "NewSystem" and "newsystem" both work.`;

        case "newsystem":
          const data = Get.starSystemData();
          return Templ.starSystemDisplay(data);

        case "newstarname":
          const name = Get.starName();
          return Templ.starNameDisplay(name);

        case "newsystemrace":
          const race = Get.systemRace();
          return Templ.systemRaceDisplay(race);

        default:
          // Unknown command.
          return false;
      }
    },
  }
);
