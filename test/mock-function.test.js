import { calculate, calculateReturnValue } from "../src/sum";

test("Test Mock Function", () => {
    const callback = jest.fn();

    calculate([10,10,10], callback);
    calculate([10,10,10,10,10], callback);

    expect(callback.mock.calls.length).toBe(2);
    expect(callback.mock.calls[0][0]).toBe(30);
    expect(callback.mock.calls[1][0]).toBe(50);
    console.info(callback.mock.calls);

});

test("Test Mock Function Return Value", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(30);
    callback.mockReturnValueOnce(50);

    expect(calculateReturnValue([10,10,10], callback)).toBe(30);
    expect(calculateReturnValue([10,10,10], callback)).toBe(50);

    expect(callback.mock.results[0].value).toBe(30);
    expect(callback.mock.results[1].value).toBe(50);    
});

test("Test Mock Implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 2;
    });

    expect(calculateReturnValue([10,10,10], callback)).toBe(60);
    expect(calculateReturnValue([10,10,10,10], callback)).toBe(80);

    expect(callback.mock.results[0].value).toBe(60);
    expect(callback.mock.results[1].value).toBe(80);
});