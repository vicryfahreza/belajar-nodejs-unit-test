beforeAll(() => console.info("Before All"));
afterAll(() => console.info("After All"));
beforeEach(() => console.info("Before Each"));
afterEach(() => console.info("After Each"));
test("Test Outer 1 ", () => console.info("Test Outer 1"));
test("Test Outer 2 ", () => console.info("Test Outer 2"));
describe("Inner Scope", () => {
    beforeAll(() => console.info("Before All Inner"));
    afterAll(() => console.info("After All Inner"));
    beforeEach(() => console.info("Before Each Inner"));
    afterEach(() => console.info("After Each Inner"));
    test("Test Inner 1", () => console.info("Test Inner 1"));
    test("Test Inner 2", () => console.info("Test Inner 2"));
});
