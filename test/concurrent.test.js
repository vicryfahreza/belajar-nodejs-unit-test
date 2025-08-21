import { sayHelloAsync } from "../src/async";

test.concurrent("Test Concurrent 1", async () => {
    await expect(sayHelloAsync("Vicry")).resolves.toBe("Hello Vicry");
})

test.concurrent("Test Concurrent 2", async () => {
    await expect(sayHelloAsync("Vicry")).resolves.toBe("Hello Vicry");
})

test.concurrent("Test Concurrent 3", async () => {
    await expect(sayHelloAsync("Vicry")).resolves.toBe("Hello Vicry");
})