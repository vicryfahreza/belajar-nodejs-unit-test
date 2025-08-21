beforeEach(() => console.info("Before Each"));
afterEach(() => console.info("After Each"));
describe("Inner Scope", () => {
    beforeEach(() => console.info("Inner Before Each"));
    afterEach(() => console.info("Inner After Each"));
    describe("Inner Inner Scope", () => {
        beforeEach(() => console.info("Inner Inner Before Each"));
        afterEach(() => console.info("Inner Inner After Each"));
        test("Test Inner 1", () => console.info("Test Inner 1"));
        test("Test Inner 2", () => console.info("Test Inner 2"));
    });
});