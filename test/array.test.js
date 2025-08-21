test("Test Array Matchers", () => {
    const name = ["Vicry","Fahreza","Rizky"];
    expect(name).toContain("Vicry");
    expect(name).toEqual(["Vicry","Fahreza","Rizky"]);

    const person = [{name : "Vicry"}, {name: "Fahreza"}];
    expect(person).toContainEqual({name: "Vicry"});
    expect(person).toEqual([{name : "Vicry"}, {name: "Fahreza"}]);
});