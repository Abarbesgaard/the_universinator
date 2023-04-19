import { Game } from "../gameLogic/gameFunctions";
import { displayThing } from "./displays";

export const newGameMessage = () => {
  const message = () => `Hello! Hello? Do you read me?<br>
...<br>
If you're seeing this, would you please type your name in so I know what to call you?<br>
...<br>
To the right of this display screen is a command prompt. Just type your name, if you don't mind, and then press the key labeled "return" on your keyboard. Or maybe it was labeled "enter", I don't remember what we decided to call it in your language.`;
  displayThing(message, null);
};

export const nameEnteredMessage = (name) => {
  const message =
    () => `Welcome, Captain ${name}, to IPASA, the InterPlanetary Aeronautics and Space Administration. By engaging this ship's SteelScan universal scanner, you have agreed to become our newest space explorer, the captain of your very own ship, charged with discovering the unexplored parts of your sector. Your cryogenically preserved crew should be coming out of their stasis sleep soon. But first, you should name your ship!<br>
...<br>
Please type in the name you wish to give your ship.`;
  displayThing(message, null);
};

export const shipNameSaved = () => {
  const shipName = Game.getShipName();
  const { ScienceOfficer } = Game.getCrewNames();
  const message =
    () => `The Starship ${shipName}. OK... well... it's your ship and if you're fine with that name then I'm fine with it, too.<br>
...<br>
Oh, looks like one of your crew is awake now. I'll leave it to them to get you setup and going from here. Good luck exploring the universe, captain!<br>
...<br>
Hello, Captain. My name is ${ScienceOfficer}, and I am your Chief Science Officer. As the CSO, it is my job to help you interpret data received from probes. Probes are those little things we send out into star systems and down onto planets in order to determine what's there. Things like atmosphere, dominant race, geology, socioeconomic status, and so on. Since we're just starting out, how about we scan the system we're in right now?<br>
To scan the current star system, type "scansystem" into the command prompt.`;
  displayThing(message, null);
};

export const systemScanned = () => {
  const { EngineeringOfficer, MedicalOfficer } = Game.getCrewNames();
  const message =
    () => `Very good Captain, we've scanned our first solar system, the one we are in currently. And right on schedule, here are the Chiefs of Engineering and Medical.<br>
  ...<br>
  Hello Captain, my name is ${EngineeringOfficer}, and I am the Chief Engineer. I'm also the only engineer, so I get the <i>pleasure</i> of taking care of multiple things around here. In addition to making sure the ship is in ship shape, as the expression goes, I'm also in charge of making sure the data access and storage systems - DASS - reliably store and recall data from the SteelScan program. You can see what DASS has stored on any system by using the "display sysinfo" command.<br>
  ...<br>
  Greetings Captain, I'm the Chief Medical Officer ${MedicalOfficer}. While ${EngineeringOfficer} cares for the health of the ship, I'm in charge of the health of its crew. That includes you, Captain. Don't do anything crazy out here and we won't have any trouble, yes? I'm also here to help with interpreting demographic data about the inhabited planets we encounter, so when you're curious if a people are generally wealthy or poor, kind or hostile, or if they have any good recipes for Space Beets, I'm who you'll turn to. Spoiler, there are no good recipes for Space Beets. When you're ready to scan for planets, just use the "scanplanet" command.<br>
  ...<br>
  What do you wish to try out next? "display sysinfo" or "scanplanet"?`;
  displayThing(message, null);
};
