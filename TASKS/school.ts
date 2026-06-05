enum Subjects {
  Math = "math",
  Bulgarian = "bulgarian",
  English = "english",
  Physics = "physics",
  Chemistry = "chemistry",
  Literature = "literature",
  PhysicalEducation = "physical education",
}

class Class {
  constructor(
    public name: string,
    public students: Student[],
  ) {}
}

class School {
  constructor(
    public name: string,
    public readonly foundYear: number,
    public address: Address,
    public building: Building,
    public teachers: Teacher[],
    public classes: Class[],
  ) {}
}

class Teacher {
  constructor(
    public name: string,
    public age: number,
    public sex: "male" | "female",
    public subject: Subjects,
    public classes: Class[],
  ) {}
}

const address: Address = {
  city: "Varna",
  street: "Primorski",
  number: 6,
};

// Students
const student1: Student = {
  name: "John",
  age: 14,
  gradesOnSubjects: [
    [Subjects.Bulgarian, 6],
    [Subjects.Chemistry, 3],
  ],
};

const student2: Student = {
  name: "John",
  age: 14,
  gradesOnSubjects: [
    [Subjects.Bulgarian, 6],
    [Subjects.Chemistry, 3],
  ],
};

// Classes
const class1: Class = new Class("8 A class", [student1, student2]);
const class2: Class = new Class("8 B class", [student1, student2]);

// Classrooms
const classroom1: Classroom = {
  classStudents: class1,
  sizeInSqM: 40,
  maxStudents: 20,
};

const classroom2: Classroom = {
  classStudents: class2,
  sizeInSqM: 39,
  maxStudents: 19,
};
// Floors
const floor1: Floor = {
  classrooms: [classroom1, classroom2],
  teacherRooms: [],
  toiletCount: 2,
};
const building: Building = {
  sizeInSqM: 300,
  floors: [floor1],
};

// Teacher rooms
const teacher1: Teacher = new Teacher(
  "Anna",
  35,
  "female",
  Subjects.Bulgarian,
  [class1, class2],
);
const teacherRoom1: TeacherRoom = {
  sizeInSqM: 50,
  teachers: [],
  maxTeachers: 0,
};

const baseSchool: School = new School(
  "School Name",
  2026,
  address,
  building,
  [teacher1],
  [class1, class2],
);
type Address = {
  city: string;
  street: string;
  number: number;
};

class Building {
  constructor(
    public sizeInSqM: number,
    public readonly floors: Floor[],
  ) {}
}

class Floor {
  constructor(
    public classrooms: Classroom[],
    public teacherRooms: TeacherRoom[],
    public toiletCount: number,
  ) {}
}

class Classroom {
  constructor(
    public classStudents: Class,
    public readonly sizeInSqM: number,
    public maxStudents: number,
  ) {}
}

class TeacherRoom {
  constructor(
    public readonly sizeInSqM: number,
    public teachers: Teacher[],
    public maxTeachers: number,
  ) {}
}

class Student {
  constructor(
    public name: string,
    public age: number,
    public gradesOnSubjects: [Subjects, number][],
  ) {}
}
