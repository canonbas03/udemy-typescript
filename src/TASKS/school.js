const MAX_TEACHERS = 30;
const MAX_STUDENTS = 30;
const MAX_GRADES_PER_SUBJECT = 4;
const MAX_CLASSES_PER_YEAR = 5;
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
// Only one school allowed !!! singleton
class School {
    name;
    foundYear;
    address;
    building;
    teachers;
    classes;
    static instance = null;
    constructor(name, foundYear, address, building, teachers, classes) {
        this.name = name;
        this.foundYear = foundYear;
        this.address = address;
        this.building = building;
        this.teachers = teachers;
        this.classes = classes;
    }
    static getInstance(name, foundYear, address, building, teachers, classes) {
        if (!this.instance) {
            this.instance = new School(name, foundYear, address, building, teachers, classes);
        }
        return this.instance;
    }
}
// Person with teacher and student
class Person {
    _name;
    _age;
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
}
class Teacher extends Person {
    sex;
    subject;
    classes;
    constructor(_name, _age, sex, subject, classes) {
        super(_name, _age);
        this.sex = sex;
        this.subject = subject;
        this.classes = classes;
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
class Room {
    _max_people;
    _sizeInSqM;
    constructor(_max_people, _sizeInSqM) {
        this._max_people = _max_people;
        this._sizeInSqM = _sizeInSqM;
    }
}
class StudentClassroom extends Room {
    classStudents;
    constructor(_max_people, _sizeInSqM, classStudents) {
        super(_max_people, _sizeInSqM);
        this.classStudents = classStudents;
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
const classroom1 = new StudentClassroom(20, 40, class1);
const classroom2 = new StudentClassroom(39, 19, class2);
// Teacher rooms
const teacher1 = new Teacher("Anna", 35, "female", Subjects.Bulgarian, [class1, class2]);
const teacherRoom1 = new TeacherRoom(50, [teacher1], 25);
// Floors
const floor1 = new Floor([classroom1, classroom2], [teacherRoom1], 2);
const building = new Building(300, [floor1]);
const baseSchool = School.getInstance("School Name", 2026, address, building, [teacher1], [class1, class2]);
export {};
//# sourceMappingURL=school.js.map