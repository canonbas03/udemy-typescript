"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greet = (name = "Guest") => {
    return `Hello, ${name}`;
};
function greet2(name = "Guest") {
    return `Hello, ${name}`;
}
console.log(greet());
console.log(greet("John"));
console.log(greet2());
console.log(greet2("John"));
const calculateArea = (width, height = 10) => {
    return width * height;
};
console.log(calculateArea(5));
console.log(calculateArea(5, 2));
const checkStatus = (isActive = true) => {
    if (isActive) {
        return "Active";
    }
    return "Inactive";
};
console.log(checkStatus());
console.log(checkStatus(false));
const fetchData = async (url, ...params) => {
    const fullURL = `${url}?${params.join("&")}`;
    try {
        let res = await fetch(fullURL);
        // let data = await res.json();
        // console.log(data);
    }
    catch (error) { }
    let mockFetch = ["data1", "data2"];
    return mockFetch;
};
fetchData("https://api.example.com", "param1=value1", "param2=value2").then((data) => console.log(data));
async function getUserInfo({ firstName, lastName, age, }) {
    return `User: ${firstName} ${lastName}, Age: ${age}`;
}
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
getUserInfo(user).then((result) => console.log(result));
//# sourceMappingURL=exercise.js.map