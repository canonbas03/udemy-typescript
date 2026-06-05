enum Subjects {
  Math = "math",
  Bulgarian = "bulgarian",
  English = "english",
  Physics = "physics",
  Chemistry = "chemistry",
  Literature = "literature",
  PhysicalEducation = "physical education",
}

class StudentClass {
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
    public classes: StudentClass[],
  ) {}
}

class Teacher {
  constructor(
    public name: string,
    public age: number,
    public sex: "male" | "female",
    public subject: Subjects,
    public classes: StudentClass[],
  ) {}
}

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
    public classrooms: StudentClassroom[],
    public teacherRooms: TeacherRoom[],
    public toiletCount: number,
  ) {}
}

class StudentClassroom {
  constructor(
    public classStudents: StudentClass,
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

const address: Address = {
  city: "Varna",
  street: "Primorski",
  number: 6,
};

// Students
const student1: Student = new Student("Alice", 14, [
  [Subjects.Bulgarian, 6],
  [Subjects.Chemistry, 4],
]);

const student2: Student = new Student("John", 14, [
  [Subjects.Bulgarian, 6],
  [Subjects.Chemistry, 3],
]);

// StudentClasses
const class1: StudentClass = new StudentClass("8 A class", [
  student1,
  student2,
]);
const class2: StudentClass = new StudentClass("8 B class", [
  student1,
  student2,
]);

// StudentClassrooms
const classroom1: StudentClassroom = new StudentClassroom(class1, 40, 20);

const classroom2: StudentClassroom = new StudentClassroom(class2, 39, 19);

// Teacher rooms
const teacher1: Teacher = new Teacher(
  "Anna",
  35,
  "female",
  Subjects.Bulgarian,
  [class1, class2],
);

const teacherRoom1: TeacherRoom = new TeacherRoom(50, [teacher1], 25);

// Floors
const floor1: Floor = new Floor([classroom1, classroom2], [teacherRoom1], 2);
const building: Building = new Building(300, [floor1]);

const baseSchool: School = new School(
  "School Name",
  2026,
  address,
  building,
  [teacher1],
  [class1, class2],
);
