class School {
  constructor(
    public name: string,
    public readonly foundYear: number,
    public address: string = "Make it Address later",
    public building: string = "Make it a Building",
    public teachers: string[] = ["We can have teacher class later"],
    public classes: string[] = ["We can have a classes class later"],
  ) {}
}

class Building {
  constructor(
    public size: number,
    public readonly floors: string[] = [
      "list of all floors maybe we need a floor class later",
    ],
  ) {}
}

class Floor {
  constructor(
    public classrooms: string[] = ["Use classroom class later"],
    public teacherRooms: string[] = ["Use teacherRooms class later"],
    public toiletCount: number,
  ) {}
}

class Classroom {
  constructor(
    public name: string,
    public readonly sizeInSqM: number,
    public maxStudents: number,
  ) {}
}

class TeacherRoom {
  constructor(
    public readonly sizeInSqM: number,
    public teachers: string[] = ["Teachers class later"],
    public maxTeachers: number,
  ) {}
}
