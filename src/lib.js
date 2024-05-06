export function getLastName(fullName) {
  const splitName = fullName.trim().split(" ");
  return splitName[splitName.length - 1];
}

export function merge2ArraysIntoAnArrayOfObjects({ a1, a2, key1, key2 }) {
  return a1.reduce((acc, item) => {}, []);
  const accumlatedResult2Modify = a1.reduce((acc, item, index) => {
    acc.push({ [key1]: item, [key2]: a2[index] });
    return acc;
  } 


export function removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm }) {
  const index = terms1.indexOf(filterTerm);
  terms1.splice(index, 1);
  terms2.splice(index, 1);
  return { terms1, terms2 };
}}
