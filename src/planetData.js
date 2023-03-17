import { getRandom, rollDie, rollIndex } from "./utilities";

const planetNames1 = [
  "Dif",
  "Us",
  "Im",
  "Men",
  "Uk",
  "Sinh",
  "Fin",
  "Garb",
  "Arash",
  "Helh",
  "leh",
  "Otal",
  "Sic",
  "Jab",
  "Op",
  "Lil",
  "Ay",
  "Hb",
  "Nau",
  "Dev"
];

const planetNames2 = [
  "Lallo",
  "Hin",
  "Jev",
  "ViY",
  "Err",
  "Pol",
  "Kil",
  "Jil",
  "Lec",
  "ces",
  "xex",
  "Zet",
  "Tex",
  "Dog",
  "Cat",
  "Tank",
  "Wat",
  "Rrr",
  "Æ",
  "Ben"
];

const planetNames3 = [
  "Sin",
  "Fin",
  "alo",
  "Not",
  "Å",
  "Rot",
  "Vex",
  "Vax",
  "Xav",
  "Zex",
  "Klob",
  "Dog",
  "Ten",
  "Mo",
  "Wall",
  "all",
  "ottin",
  "Ulgh",
  "Shi",
  "Glad"
];

export function planetName() {
  const name1 = getRandom(planetNames1);
  const name2 = getRandom(planetNames2);
  const name3 = getRandom(planetNames3);
  return `${name1}${name2}${name3}`;
}
