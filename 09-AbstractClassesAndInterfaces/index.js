class Department {
    name;
    constructor(name) {
        this.name = name;
    }
    addHoliday(holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday);
            }
        }
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            console.log("NO HOLIDAYS!");
        }
        console.log("HOLIDAYS:");
        this.holidays.forEach((holiday, index) => {
            console.log(`${++index}. Reason: ${holiday.reason}; Date: ${holiday.date}`);
        });
    }
}
class ItDepartment extends Department {
    holidays = [];
    constructor() {
        super("IT Department");
    }
}
class AdminDepartment extends Department {
    holidays = [];
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
itDepartment.printHolidays();
export {};
//# sourceMappingURL=index.js.map