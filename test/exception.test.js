import { callMe, MyException } from "../src/exception";

test("Test Exception", () => {
    expect(() => callMe("Vicry")).toThrow();
    expect(() => callMe("Vicry")).toThrow(MyException);
    expect(() => callMe("Vicry")).toThrow("Ups my exceptions happens");
});

test("exception not change", () => {
    expect(callMe("Budi")).toBe("OK");
});