test("Test number matchers", () => {
    let num = 5 + 5;
    expect(num).toBeGreaterThan(0);
    expect(num).toBeGreaterThanOrEqual(10);
    expect(num).toBeLessThan(20);
    expect(num).toBe(10);
});