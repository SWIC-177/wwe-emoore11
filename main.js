import { CHAMPIONS } from "./src/data";
import { getLastName } from "./src/lib";

const sortedChampions = CHAMPIONS.toSorted((a, b) =>
  getLastName(a).localeCompare(getLastName(b), "en", {
    ignorePunctuation: true,
  }),
);

console.log(sortedChampions);
