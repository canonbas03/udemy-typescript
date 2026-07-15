const MAX_TEACHERS = 30;
const MAX_STUDENTS = 30;
const MAX_GRADES_PER_SUBJECT = 4;
const MAX_CLASSES_PER_YEAR = 5;

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
    private name: string,
    private students: Student[],
  ) {}
}

// Only one school allowed !!! singleton
class School {
  private static instance: School | null = null;
  private constructor(
    private name: string,
    private readonly foundYear: number,
    private address: Address,
    private building: Building,
    private teachers: Teacher[],
    private classes: StudentClass[],
  ) {}

  public static getInstance(
    name: string,
    foundYear: number,
    address: Address,
    building: Building,
    teachers: Teacher[],
    classes: StudentClass[],
  ): School {
    if (!this.instance) {
      this.instance = new School(
        name,
        foundYear,
        address,
        building,
        teachers,
        classes,
      );
    }

    return this.instance;
  }
}

// Person with teacher and student

class Person {
  constructor(
    protected _name: string,
    protected _age: number,
  ) {}
}
class Teacher extends Person {
  constructor(
    _name: string,
    _age: number,
    private sex: "male" | "female",
    private subject: Subjects,
    private classes: StudentClass[],
  ) {
    super(_name, _age);
  }
}

class Student {
  constructor(
    private name: string,
    private age: number,
    private gradesOnSubjects: [Subjects, number][],
  ) {}
}

type Address = {
  city: string;
  street: string;
  number: number;
};

class Building {
  constructor(
    private sizeInSqM: number,
    private readonly floors: Floor[],
  ) {}
}

class Floor {
  constructor(
    private classrooms: StudentClassroom[],
    private teacherRooms: TeacherRoom[],
    private toiletCount: number,
  ) {}
}

class Room {
  constructor(
    protected _max_people: number,
    protected readonly _sizeInSqM: number,
  ) {}
}
class StudentClassroom extends Room {
  constructor(
    _max_people: number,
    _sizeInSqM: number,
    private classStudents: StudentClass,
    // private readonly sizeInSqM: number,
    // private maxStudents: number,
  ) {
    super(_max_people, _sizeInSqM);
  }
}

class TeacherRoom {
  constructor(
    private readonly sizeInSqM: number,
    private teachers: Teacher[],
    private maxTeachers: number,
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
const classroom1: StudentClassroom = new StudentClassroom(20, 40, class1);

const classroom2: StudentClassroom = new StudentClassroom(39, 19, class2);

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

const baseSchool: School = School.getInstance(
  "School Name",
  2026,
  address,
  building,
  [teacher1],
  [class1, class2],
);
