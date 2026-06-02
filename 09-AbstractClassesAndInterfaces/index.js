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
}
class ItDepartment extends Department {
    holidays = [];
    constructor() {
        super("IT Department");
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            console.log("NO HOLIDAYS!");
        }
        console.log(`${this.name} HOLIDAYS:`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${++index}. Reason: ${holiday.reason}; Date: ${holiday.date}`);
        });
    }
}
class AdminDepartment extends Department {
    holidays = [];
    constructor() {
        super("Admin Department");
    }
    printHolidays() {
        if (this.holidays.length === 0) {
            console.log("NO HOLIDAYS!");
        }
        console.log(`${this.name} HOLIDAYS:`);
        this.holidays.forEach((holiday, index) => {
            console.log(`${++index}. Reason: ${holiday.reason}; Date: ${holiday.date}`);
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
class Admin {
    name;
    email;
    level;
    constructor(name, email, level) {
        this.name = name;
        this.email = email;
        this.level = level;
    }
    login() {
        console.log(`ADMIN logged in.`);
    }
}
class Worker {
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(`WORKER logged in.`);
    }
}
const admin = new Admin("Jorge", "jorge@email.com", 1);
const worker = new Worker("Ford", "ford@email.com");
function Auth(user) {
    user.login();
}
Auth(admin);
Auth(worker);
export {};
//# sourceMappingURL=index.js.map