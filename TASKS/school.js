class School {
    name;
    foundDate;
    address;
    building;
    teachers;
    classes;
    constructor(name, foundDate, address = "Make it Address later", building = "Make it a Building", teachers = ["We can have teacher class later"], classes = ["We can have a classes class later"]) {
        this.name = name;
        this.foundDate = foundDate;
        this.address = address;
        this.building = building;
        this.teachers = teachers;
        this.classes = classes;
    }
}
export {};
//# sourceMappingURL=school.js.map