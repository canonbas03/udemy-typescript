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
    static IT_DEP = "IT Department";
    holidays = [];
    constructor() {
        super(ItDepartment.IT_DEP);
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
// Interface can be used as a type as well
const user = {
    name: "",
    email: "",
    login: function () {
        throw new Error("Function not implemented.");
    },
};
const LuxuryHouse = {
    address: "Slivo pole 23",
    windows: 8,
    doors: 2,
    jacuzzi: true,
};
var RoleList;
(function (RoleList) {
    RoleList["Admin"] = "admin";
    RoleList["Worker"] = "worker";
    RoleList["Mole"] = "mole";
})(RoleList || (RoleList = {}));
var PermissionList;
(function (PermissionList) {
    PermissionList["Read"] = "read";
    PermissionList["Write"] = "write";
    PermissionList["Execute"] = "execute";
})(PermissionList || (PermissionList = {}));
const adminUser = {
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
var CarType;
(function (CarType) {
    CarType["Sedan"] = "sedan";
    CarType["Van"] = "van";
    CarType["Truck"] = "truck";
})(CarType || (CarType = {}));
var CarBrand;
(function (CarBrand) {
    CarBrand["Bmw"] = "bmw";
    CarBrand["Mercedes"] = "mercedes";
    CarBrand["Toyota"] = "toyota";
})(CarBrand || (CarBrand = {}));
var CarColor;
(function (CarColor) {
    CarColor["Red"] = "red";
    CarColor["Green"] = "green";
    CarColor["Petrol"] = "petrol";
})(CarColor || (CarColor = {}));
const automobile = {
    type: CarType.Sedan,
    brand: CarBrand.Bmw,
    colors: [CarColor.Red, CarColor.Green],
};
class Car {
    brand;
    colors;
    type = CarType.Sedan;
    constructor(brand, colors) {
        this.brand = brand;
        this.colors = colors;
    }
}
const mercedes = new Car(CarBrand.Mercedes, [CarColor.Green]);
console.log(mercedes);
export {};
//# sourceMappingURL=index.js.map