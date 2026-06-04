// We have a Holidays type, which consists of  an object array, each object has 2 parameters: date and reason. date is of the type Date, and reason is of type string.
type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}

  public addHoliday(holidays: Holidays): void {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }

  public abstract printHolidays(): void;
}

class ItDepartment extends Department {
  static IT_DEP = "IT Department";
  protected holidays: Holidays = [];
  constructor() {
    super(ItDepartment.IT_DEP);
  }

  public printHolidays(): void {
    if (this.holidays.length === 0) {
      console.log("NO HOLIDAYS!");
    }

    console.log(`${this.name} HOLIDAYS:`);
    this.holidays.forEach((holiday, index) => {
      console.log(
        `${++index}. Reason: ${holiday.reason}; Date: ${holiday.date}`,
      );
    });
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("Admin Department");
  }

  public printHolidays(): void {
    if (this.holidays.length === 0) {
      console.log("NO HOLIDAYS!");
    }

    console.log(`${this.name} HOLIDAYS:`);
    this.holidays.forEach((holiday, index) => {
      console.log(
        `${++index}. Reason: ${holiday.reason}; Date: ${holiday.date}`,
      );
    });
  }
}

const itHolidays = [
  {
    date: new Date(2026, 3, 12),
    reason: "It day",
  },
  {
    date: new Date(2026, 6, 12),
    reason: "Independence day",
  },
];

const adminHolidays = [
  {
    date: new Date(2026, 3, 12),
    reason: "Admin day",
  },
  {
    date: new Date(2026, 6, 12),
    reason: "Independence day",
  },
];

const itDepartment = new ItDepartment();
const adminDepartment = new AdminDepartment();

itDepartment.addHoliday(itHolidays);
adminDepartment.addHoliday(adminHolidays);

console.log(itDepartment);
console.log(adminDepartment);

itDepartment.printHolidays();

interface User {
  name: string;
  email: string;
  login(): void;
}

class Admin implements User {
  constructor(
    public name: string,
    public email: string,
    public level: number,
  ) {}
  login(): void {
    console.log(`ADMIN logged in.`);
  }
}

class Worker implements User {
  constructor(
    public name: string,
    public email: string,
  ) {}
  login(): void {
    console.log(`WORKER logged in.`);
  }
}

const admin = new Admin("Jorge", "jorge@email.com", 1);
const worker = new Worker("Ford", "ford@email.com");

function Auth(user: User): void {
  user.login();
}

Auth(admin);
Auth(worker);

// Interface can be used as a type as well
const user: User = {
  name: "",
  email: "",
  login: function (): void {
    throw new Error("Function not implemented.");
  },
};

interface House {
  address: string;
  windows: number;
  doors: number;
}

interface LuxuryHouse extends House {
  jacuzzi: boolean;
}

const LuxuryHouse: LuxuryHouse = {
  address: "Slivo pole 23",
  windows: 8,
  doors: 2,
  jacuzzi: true,
};

// MULTIPLE INTERFACES
interface Person {
  name: string;
  address: string;
  phone: number;
  gender: string;
}

enum RoleList {
  Admin = "admin",
  Worker = "worker",
  Mole = "mole",
}

interface Role {
  role: RoleList;
}

enum PermissionList {
  Read = "read",
  Write = "write",
  Execute = "execute",
}

interface Permission {
  permissions: PermissionList[];
}

interface adminInterface extends Person, Role, Permission {
  numberOfUsersReporting: number;
}

const adminUser: adminInterface = {
  numberOfUsersReporting: 6,
  name: "",
  address: "",
  phone: 5653434,
  gender: "",
  role: RoleList.Admin,
  permissions: [
    PermissionList.Read,
    PermissionList.Write,
    PermissionList.Execute,
  ],
};

// GENERICS
interface Automobile<Type, Brand, Color> {
  type: Type;
  brand: Brand;
  colors: Color[];
}

enum CarType {
  Sedan = "sedan",
  Van = "van",
  Truck = "truck",
}

enum CarBrand {
  Bmw = "bmw",
  Mercedes = "mercedes",
  Toyota = "toyota",
}
enum CarColor {
  Red = "red",
  Green = "green",
  Petrol = "petrol",
}

const automobile: Automobile<CarType, CarBrand, CarColor> = {
  type: CarType.Sedan,
  brand: CarBrand.Bmw,
  colors: [CarColor.Red, CarColor.Green],
};

class Car
  implements Automobile<CarType, CarBrand, CarColor>, CommercialVehicle
{
  public type = CarType.Sedan;

  constructor(
    public brand: CarBrand,
    public colors: CarColor[],
    public capacity: number,
    public licenseRenewalDate: Date,
  ) {}
}

const mercedes: Car = new Car(
  CarBrand.Mercedes,
  [CarColor.Green],
  15,
  new Date(),
);
console.log(mercedes);

// --- MULTIPLE INTERFACES ---

interface CommercialVehicle {
  capacity: number;
  licenseRenewalDate: Date;
}

// DIFFERENCE BETWEEN TYPE AND INERFACE
type Name = {
  name: string;
};

type LastName = {
  lName: string;
};

// union type
type Person2 = Name | LastName;

// intersection type
type Person3 = Name & LastName;

const person: Person2 = {
  name: "human",
  // lName: "",
};

const person2: Person3 = {
  name: "human",
  lName: "",
};

// Interfaces get merged if they are with the same name
interface Name1 {
  name: string;
}

interface LastName1 {
  lastName: string;
}

interface Person1 extends Name1, LastName1 {}

const person4: Person1 = {
  name: "",
  lastName: "",
};

class Person4 implements Person1 {
  constructor(
    public name: string,
    public lastName: string,
  ) {}
}
