// Class decorator
//@PrintDecoratorData
class Manager {
    task = "Simple task";
    project = "Simple project";
    constructor() {
        console.log("Initializing the manager class");
    }
}
function PrintDecoratorData(value, context) { }
// Calling the constructor
console.log("// Calling the constructor");
new Manager();
const manager = new Manager();
console.log("// Manager logged:");
console.log(manager);
export {};
//# sourceMappingURL=Manager.js.map