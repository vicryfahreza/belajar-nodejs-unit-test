import { sumAll } from "../src/sum";

// dengan array
const table = [
    [[10,10,10], 30],
    [[10,10,10,20], 50],
    [[10,10,10,10,10,10,10], 70],
];

// dengan object
const tableObject = [
    {numbers: [10,10,10], expected: 30},
    {numbers: [10,10,10,20], expected: 50},
    {numbers: [10,10,10,10,10,10,10], expected: 70},   
];

test.each(table)("test sumAll(%s) should result in %i", (numbers, expected) => {
    const result = sumAll(numbers);
    expect(result).toBe(expected);
});

// kalau menggunakan objek perlu destructuring dulu
test.each(tableObject)("test with obj sumAll($numbers) should result in $expected", ({numbers, expected}) => {
    const result = sumAll(numbers);
    expect(result).toBe(expected);
});
