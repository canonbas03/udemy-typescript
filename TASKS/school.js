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
class Class {
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
const address = {
    city: "Varna",
    street: "Primorski",
    number: 6,
};
// Students
const student1 = {
    name: "John",
    age: 14,
    gradesOnSubjects: [
        [Subjects.Bulgarian, 6],
        [Subjects.Chemistry, 3],
    ],
};
const student2 = {
    name: "John",
    age: 14,
    gradesOnSubjects: [
        [Subjects.Bulgarian, 6],
        [Subjects.Chemistry, 3],
    ],
};
// Classes
const class1 = new Class("8 A class", [student1, student2]);
const class2 = new Class("8 B class", [student1, student2]);
// Classrooms
const classroom1 = {
    classStudents: class1,
    sizeInSqM: 40,
    maxStudents: 20,
};
const classroom2 = {
    classStudents: class2,
    sizeInSqM: 39,
    maxStudents: 19,
};
// Floors
const floor1 = {
    classrooms: [classroom1, classroom2],
    teacherRooms: [],
    toiletCount: 2,
};
const building = {
    sizeInSqM: 300,
    floors: [floor1],
};
// Teacher rooms
const teacher1 = new Teacher("Anna", 35, "female", Subjects.Bulgarian, [class1, class2]);
const teacherRoom1 = {
    sizeInSqM: 50,
    teachers: [],
    maxTeachers: 0,
};
const baseSchool = new School("School Name", 2026, address, building, [teacher1], [class1, class2]);
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
class Classroom {
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
export {};
//# sourceMappingURL=school.js.map