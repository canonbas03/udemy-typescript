//*
// FIRST DECORATOR
function FirstDecorator(name: string) {
  return function (constructor: Function) {
    console.log(`The decorator: ${name} is invoked`);
    console.log(constructor);
    console.log("Constructor name: ", constructor.name); // Aircraft
    console.log("Constructor length: ", constructor.length); // 2 args
  };
}

@FirstDecorator("First Decorator")
class Aircraft {
  constructor(
    public aircraftModel: string,
    private pilot: string,
  ) {
    console.log("Aircraft class instantiated");
  }

  public get pilotName() {
    return this.pilot;
  }
}

const aircraft = new Aircraft("Airbus-744", "Petar Petrov");
// */

class Hello {}
