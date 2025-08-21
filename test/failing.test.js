import { sayHello } from "../src/sayHello";

test("Test Success sayHello", () => {
    expect(sayHello("Vicry")).toBe("Hello Vicry");
});

test.failing("Test failed sayHello", () => {
    sayHello(null);
});