import { expect, test } from "bun:test";
import { experienceLabel } from "./experience";

test("experience counts whole months from Feb 2024", () => {
  expect(experienceLabel(new Date(2026, 10, 22))).toBe("2y 9m"); // matches resume, Nov 2026
  expect(experienceLabel(new Date(2027, 1, 1))).toBe("3y");
  expect(experienceLabel(new Date(2024, 1, 15))).toBe("0y");
});
