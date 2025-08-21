import { sum, sumAll } from "../src/sum"

// perintah test dengan jest
// npx jest
// npx jest --testNamePattern "test sum 1, 2 must be 3"
// npx jest --runTestsByPath test/sum.test.js
test("test sum 1, 2 must be 3", () => {
    const result = sum(1,2);

    expect(result).toBe(3);
});

test("test function 1", () => {
    const result = sum(1,2);

    expect(result).toBe(3);
});

test("test function 2", () => {
    const result = sum(1,2);

    expect(result).toBe(3);
});

test("test sumAll", () => {
    const result = sumAll([10,20,30]);
    expect(result).toBe(60);
});