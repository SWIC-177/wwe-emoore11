import { BELTS, CHAMPIONS } from "./src/data";

const beltsWithoutWomen = BELTS.filter(
  (belt) => belt !== "Women's World Champion",
);

console.log(beltsWithoutWomen);

const championsWithoutVacant = CHAMPIONS.filter(
  (champion) => champion !== "Vacant Title",
);

console.log(championsWithoutVacant);
