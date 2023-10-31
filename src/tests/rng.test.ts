import { expect, test } from "vitest";
import { generateInteger } from "../utils/rng";

test("returns low when high = low + 1", () => {
    expect(generateInteger(10, 11)).toBe(10);
});
