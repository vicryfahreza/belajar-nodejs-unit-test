test("Test String Matcher", () => {
    let str = "hello world";
    expect(str).toMatch(/world/);
    expect(str).toContain("hello");
    expect(str).toHaveLength(11);
});