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

/*
// DECORATORS WITH PROTOTYPES
enum Manufacturers {
  airbus = "airbus",
  boeing = "boeing",
}

function AircraftManufacturers(manufacturer: Manufacturers) {
  // Decorator Factory
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
    }
  };
}

// All of those instances will have airbus as a manufactorer
@AircraftManufacturers(Manufacturers.airbus)
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
console.log(airplane);

// */

//*
// DECORATORS WITH PROTOTYPES
enum Manufacturers {
  airbus = "airbus",
  boeing = "boeing",
}

interface AircraftInterface {
  aircraftModel: string;
  prototype?: any;
  origin?: string;
  manufacturer?: string;
  type?: string;
}

function AircraftManufacturers(manufacturer: Manufacturers) {
  return (target: Function) => {
    if (manufacturer === Manufacturers.airbus) {
      target.prototype.origin = "USA";
      target.prototype.manufacturer = Manufacturers.airbus;
      target.prototype.type = "Jet";
    } else {
      target.prototype.origin = "France";
      target.prototype.manufacturer = Manufacturers.boeing;
      target.prototype.type = "Helicopter";
    }
  };
}

@AircraftManufacturers(Manufacturers.airbus)
class Airplane implements AircraftInterface {
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

const airplane: Airplane = new Airplane("Airbus-744", "Petar Petrov");
console.log(airplane);

// */
