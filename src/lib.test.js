import { describe, expect, test } from "vitest";
import { getLastName, removeCorrespondingItemsByTerm } from "./lib";

describe("getLastName");
test("removeCorrespondingItemsByTerm", () => {
  // Arrange

  describe("getLastName", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";

    const result = getLastName(fullName);

    expect(result).toBe(expected);
  });

  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  test("returns the last name of a full name", () => {
    const fullName = "John Doe";
    const expectedLast = "Doe";

    const result = getLastName(fullName);

    expect(result).toBe(expectedLast);
  }); // Add closing parenthesis here

  test("returns the last name from a full name with special characters", () => {
    const fullName = "John O'Doe";
    const expectedLast = "O'Doe";

    const result = getLastName(fullName);

    expect(result).toBe(expectedLast);
  });

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert - Check if the function correctly removes the corresponding items

  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});

const result = merge2ArraysIntoAnArrayOfObjects({ a1, a2, key1, key2 });

expect(result).toEqual(expectedLast);
