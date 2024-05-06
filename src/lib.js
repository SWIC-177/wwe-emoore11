export function getLastName(fullNaame) {
  const splitName = fullNaame.trim().split(" ");
  return splitName[splitName.length - 1];
}

export function removeCorrespondingItemsByTerm({
  terms1,
  terms2,
  filterTerm,
}) {}
