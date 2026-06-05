var Subjects;
(function (Subjects) {
    Subjects["Math"] = "math";
    Subjects["Bulgarian"] = "bulgarian";
    Subjects["English"] = "english";
    Subjects["Physics"] = "physics";
    Subjects["Chemistry"] = "chemistry";
    Subjects["Literature"] = "literature";
    Subjects["PhysicalEducation"] = "physical education";
})(Subjects || (Subjects = {}));
class StudentClass {
    name;
    students;
    constructor(name, students) {
        this.name = name;
        this.students = students;
    }
}
class School {
    name;
    foundYear;
    address;
    building;
    teachers;
    classes;
    constructor(name, foundYear, address, building, teachers, classes) {
        this.name = name;
        this.foundYear = foundYear;
        this.address = address;
        this.building = building;
        this.teachers = teachers;
        this.classes = classes;
    }
}
class Teacher {
    name;
    age;
    sex;
    subject;
    classes;
    constructor(name, age, sex, subject, classes) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.subject = subject;
        this.classes = classes;
    }
}
class Building {
    sizeInSqM;
    floors;
    constructor(sizeInSqM, floors) {
        this.sizeInSqM = sizeInSqM;
        this.floors = floors;
    }
}
class Floor {
    classrooms;
    teacherRooms;
    toiletCount;
    constructor(classrooms, teacherRooms, toiletCount) {
        this.classrooms = classrooms;
        this.teacherRooms = teacherRooms;
        this.toiletCount = toiletCount;
    }
}
class StudentClassroom {
    classStudents;
    sizeInSqM;
    maxStudents;
    constructor(classStudents, sizeInSqM, maxStudents) {
        this.classStudents = classStudents;
        this.sizeInSqM = sizeInSqM;
        this.maxStudents = maxStudents;
    }
}
class TeacherRoom {
    sizeInSqM;
    teachers;
    maxTeachers;
    constructor(sizeInSqM, teachers, maxTeachers) {
        this.sizeInSqM = sizeInSqM;
        this.teachers = teachers;
        this.maxTeachers = maxTeachers;
    }
}
class Student {
    name;
    age;
    gradesOnSubjects;
    constructor(name, age, gradesOnSubjects) {
        this.name = name;
        this.age = age;
        this.gradesOnSubjects = gradesOnSubjects;
    }
}
const address = {
    city: "Varna",
    street: "Primorski",
    number: 6,
};
// Students
const student1 = new Student("Alice", 14, [
    [Subjects.Bulgarian, 6],
    [Subjects.Chemistry, 4],
]);
const student2 = new Student("John", 14, [
    [Subjects.Bulgarian, 6],
    [Subjects.Chemistry, 3],
]);
// StudentClasses
const class1 = new StudentClass("8 A class", [
    student1,
    student2,
]);
const class2 = new StudentClass("8 B class", [
    student1,
    student2,
]);
// StudentClassrooms
const classroom1 = new StudentClassroom(class1, 40, 20);
const classroom2 = new StudentClassroom(class2, 39, 19);
// Teacher rooms
const teacher1 = new Teacher("Anna", 35, "female", Subjects.Bulgarian, [class1, class2]);
const teacherRoom1 = new TeacherRoom(50, [teacher1], 25);
// Floors
const floor1 = new Floor([classroom1, classroom2], [teacherRoom1], 2);
const building = new Building(300, [floor1]);
const baseSchool = new School("School Name", 2026, address, building, [teacher1], [class1, class2]);
export {};
//# sourceMappingURL=school.js.map