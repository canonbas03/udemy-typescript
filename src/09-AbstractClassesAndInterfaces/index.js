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
    RoleList[RoleList["Admin"] = 3] = "Admin";
    RoleList[RoleList["Worker"] = 2] = "Worker";
    RoleList[RoleList["Mole"] = 3] = "Mole";
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
const testUser = {
    numberOfUsersReporting: 0,
    name: "",
    address: "",
    phone: 0,
    gender: "",
    role: RoleList.Admin,
    permissions: [],
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
    capacity;
    licenseRenewalDate;
    type = CarType.Sedan;
    constructor(brand, colors, capacity, licenseRenewalDate) {
        this.brand = brand;
        this.colors = colors;
        this.capacity = capacity;
        this.licenseRenewalDate = licenseRenewalDate;
    }
}
const mercedes = new Car(CarBrand.Mercedes, [CarColor.Green], 15, new Date());
console.log(mercedes);
const person = {
    name: "human",
    //lName: "",
};
const person2 = {
    name: "human",
    lName: "",
};
const person4 = {
    name: "",
    lastName: "",
    galeno: "",
};
class Person4 {
    name;
    lastName;
    galeno;
    constructor(name, lastName, galeno) {
        this.name = name;
        this.lastName = lastName;
        this.galeno = galeno;
    }
}
class Person5 {
    greet() {
        return `Hi I am ${this.name} `;
    }
}
class RegisteredPerson extends Person5 {
    name;
    lName;
    constructor(name, lName) {
        super();
        this.name = name;
        this.lName = lName;
    }
}
const person5 = new RegisteredPerson("Name", "lastName");
console.log(person5.greet());
export {};
//# sourceMappingURL=index.js.map