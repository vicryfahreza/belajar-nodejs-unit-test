import { sayHelloAsync } from "../src/async";

test("Test Async Function", async () => {
    let result = await sayHelloAsync("vicry");
    expect(result).toBe("Hello vicry");
});

test("Test Async Matcher", async () => {
    await expect(sayHelloAsync("vicry")).resolves.toBe("Hello vicry");
    await expect(sayHelloAsync("")).rejects.toBe("name is empty");
});
