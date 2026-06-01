type Holidays = {
  date: Date;
  reason: string;
}[];

abstract class Department {
  protected abstract holidays: Holidays;
  constructor(protected name: string) {}

  public addHoliday(holidays: Holidays): void {
    if (Array.isArray(holidays)) {
      for (const holiday of holidays) {
        this.holidays.push(holiday);
      }
    }
  }
}

class ItDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("IT Department");
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super("Admin Department");
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
