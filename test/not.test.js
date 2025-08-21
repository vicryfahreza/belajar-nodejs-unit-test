test("string.not", () => {
    let name = "Vicry Fahreza";

    expect(name).not.toBe("Vicry Budidi");
    expect(name).not.toMatch(/Budi/);
    expect(name).not.toHaveLength(5);
});

test("number.not", () => {
    let value = 5 + 5;

    expect(value).not.toBeLessThan(10);
    expect(value).not.toBeLessThanOrEqual(9);
    expect(value).not.toBeGreaterThan(20);
    expect(value).not.toBeGreaterThanOrEqual(20);

});