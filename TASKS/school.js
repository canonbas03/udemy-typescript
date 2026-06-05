class School {
    name;
    foundYear;
    address;
    building;
    teachers;
    classes;
    constructor(name, foundYear, address = "Make it Address later", building = "Make it a Building", teachers = ["We can have teacher class later"], classes = ["We can have a classes class later"]) {
        this.name = name;
        this.foundYear = foundYear;
        this.address = address;
        this.building = building;
        this.teachers = teachers;
        this.classes = classes;
    }
}
class Building {
    size;
    floors;
    constructor(size, floors = [
        "list of all floors maybe we need a floor class later",
    ]) {
        this.size = size;
        this.floors = floors;
    }
}
class Floor {
    classrooms;
    teacherRooms;
    toiletCount;
    constructor(classrooms = ["Use classroom class later"], teacherRooms = ["Use teacherRooms class later"], toiletCount) {
        this.classrooms = classrooms;
        this.teacherRooms = teacherRooms;
        this.toiletCount = toiletCount;
    }
}
class Classroom {
    name;
    sizeInSqM;
    maxStudents;
    constructor(name, sizeInSqM, maxStudents) {
        this.name = name;
        this.sizeInSqM = sizeInSqM;
        this.maxStudents = maxStudents;
    }
}
class TeacherRoom {
    sizeInSqM;
    teachers;
    maxTeachers;
    constructor(sizeInSqM, teachers = ["Teachers class later"], maxTeachers) {
        this.sizeInSqM = sizeInSqM;
        this.teachers = teachers;
        this.maxTeachers = maxTeachers;
    }
}
export {};
//# sourceMappingURL=school.js.map