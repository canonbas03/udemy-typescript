/*
// FIRST DECORATOR
function FirstDecorator(name: string) {
  return function (constructor: Function) {
    console.log(`The decorator: ${name} is invoked`);
    console.log(constructor);
    console.log("Constructor name: ", constructor.name); // Airplane
    console.log("Constructor length: ", constructor.length); // 2 args
  };
}

@FirstDecorator("First Decorator")
class Airplane {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Airplane class instantiated");
  }

  public get pilotName() {
    return this.pilot;
  }
}

const airplane = new Airplane("Airbus-744", "Petar Petrov");
// */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function StaticMethodDecorator(constructor, methodName, descriptor) {
    console.log(constructor);
    console.log(methodName);
    console.log(descriptor);
    descriptor.writable = false;
}
class Airplane {
    aircraftModel;
    pilot;
    constructor(aircraftModel, pilot) {
        this.aircraftModel = aircraftModel;
        this.pilot = pilot;
    }
    static seatCount() {
        console.log("Seats: 150");
    }
    pilotName() {
        console.log(this.pilot);
    }
}
__decorate([
    StaticMethodDecorator
], Airplane, "seatCount", null);
const airplane = new Airplane("Airbus-744", "Petar Petrov");
export {};
// */
//# sourceMappingURL=index.js.map