export function getLastName(fullName) {
  const splitName = fullName.trim().split(" ");
  return splitName[splitName.length - 1];
}

export function removeCorrespondingItemsByTerm({
  terms1,
  terms2,
  filterTerm,
}) {}
