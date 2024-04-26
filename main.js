import { BELTS, CHAMPIONS } from "./src/data";
import { removeCorrespondingItemsByTerm } from "./src/lib";

const filteredBelts = BELTS.filter((belt) => !belt.includes("Tag Team"));
console.log(filteredBelts);

const filteredChampions = removeCorrespondingItemsByTerm(CHAMPIONS, "Tag Team");
console.log(filteredChampions);

const beltsWithoutWomen = BELTS.filter(
  (belt) => belt !== "Women's World Champion",
);

console.log(beltsWithoutWomen);

const championsWithoutVacant = CHAMPIONS.filter(
  (champion) => champion !== "Vacant Title",
);

console.log(championsWithoutVacant);
