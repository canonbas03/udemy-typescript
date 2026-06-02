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
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
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
