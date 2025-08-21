import { sumAll } from "../src/sum";

describe("Test It", () => {
    it("should get 30 with parameter sumAll([10,10,10])", () => {
        expect(sumAll([10,10,10])).toBe(30);
    });
});