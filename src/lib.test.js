import { describe, expect, test } from "vitest";
import { removeCorrespondingItemsByTerm } from "./lib";

export function getLastName(fullName) {
  const splitName = fullName.trim().split(" ");
  return splitName[splitName.length - 1];
}

test("removeCorrespondingItemsByTerm", () => {
  // Arrange

  describe("getLastName", () => {
    // Arrange
    const fullName = "John Doe";
    const expectedLastName = "Doe";

    // Act
    const actualLastName = getLastName(fullName);

    // Assert
    expect(actualLastName).toBe(expectedLastName);
  });

  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert - Check if the function correctly removes the corresponding items

  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});
