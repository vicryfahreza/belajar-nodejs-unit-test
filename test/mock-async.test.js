import { getBalance } from "../src/async";

test("Test Mock Async", async () => {
    const from = jest.fn().mockResolvedValueOnce(1000);
    await expect(getBalance("vicry", from)).resolves.toEqual({
        name: "vicry",
        balance: 1000
    });
    await expect(from.mock.calls.length).toBe(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
})

test.failing("Test Mock Function Rejected", async () => {
    const from = jest.fn().mockRejectedValueOnce(new Error("Failed"));

    await getBalance("vicry", from);
})

test("Test Mock Function Matcher", async () => {
    const from = jest.fn().mockRejectedValueOnce("Failed");
    
    await expect(getBalance("vicry", from)).rejects.toBe("Failed");
})