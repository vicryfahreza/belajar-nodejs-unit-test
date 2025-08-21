import { sayHelloAsync } from "../src/async";
import { sum } from "../src/sum";


beforeAll(async () => {
    console.info("Before All");
    await expect(sayHelloAsync("vicry")).resolves.toBe("Hello vicry");
});

afterAll(() => {
    console.info("After All");
});

// beforeEach(() => {
//     console.info("Before Each");
// });

// afterEach(() => {
//     console.info("After Each");
// });

test("Test Setup", () => {
    expect(sum(10,10)).toBe(20);
});

test("Test Setup 2", () => {
    expect(sum(20,20)).toBe(40);
});
