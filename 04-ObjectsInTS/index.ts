let person = {
  name: "John",
  age: 22,
};
console.log(person.name);

let object1 = {
  name: "dad",
  age: 34,
  gender: "male",
};
person = object1;
//object1 = person;

let car: Object = {
  brand: "Lambo",
  horsePower: 3000,
};
// console.log(car.brand); error

// all inherit from the global Object
car = [];
car = {};
car = () => {};

let newCar: {
  brand: string;
  horsePower: number;
} = {
  brand: "BMW",
  horsePower: 2500,
};

// newCar = []; error

//  We create a type alias
type Car = {
  brand: string;
  horsePower: number;
};

let newCar2: Car = {
  brand: "Mercedes",
  horsePower: 4444,
};
console.log(newCar2.brand);

let cat: object = {
  name: "Koko",
  legs: 4,
};
//console.log(cat.name); error

console.log(typeof cat);

// NESTED OBJECTS

type Post = {
  title: string;
  content: string;
  date: Date;
};

let post1: Post = {
  title: "Post Uno",
  content: "La Alegria",
  date: new Date(),
};

let post2 = {
  title: "Post Dos",
  content: "La Alegria 2",
  date: new Date(),
};
console.log(post2.date);

type Author = {
  name: string;
  age: number;
};

type NewPost = {
  title: string;
  content: string;
  date: Date;
  author: Author;
};

let post3: NewPost = {
  title: "Title tres",
  content: "Bangaranga",
  date: new Date(),
  author: {
    name: "Dara",
    age: 27,
  },
};
console.log(post3.author.age);

type NewPost2 = {
  title: string;
  content: string;
  date: Date;
  author: Author;
  awards: Awards;
};

// index signature [key: string]
type Awards = {
  [key: string]: AwardDetails;
};

type AwardDetails = {
  name: string;
  date: Date;
};

let awardObj: Awards = {
  testName: {
    name: "nameee",
    date: new Date(),
  },
  oscar: {
    name: "nameee",
    date: new Date(),
  },
};

awardObj.testName?.date;

let post4: NewPost2 = {
  title: "Title cuatro?",
  content: "Babayaga",
  date: new Date(),
  author: {
    name: "Dara",
    age: 27,
  },
  awards: {
    awrd1: {
      name: "First post award",
      date: new Date(),
    },
    awrd2: {
      name: "Second award - Yay!",
      date: new Date(),
    },
  },
};

// --- OPTIONAL PROPERTIES ---
type NewPost3 = {
  title: string;
  content: string;
  date: Date;
  author: Author2;
  awards: Awards;
  engagement?: string;
};

type Author2 = {
  name: string;
  age: number;
  readonly type: "ai" | "human";
};

let post5: NewPost3 = {
  title: "Title cinco",
  content: "BabaVanga",
  date: new Date(),
  author: {
    name: "Dara",
    age: 27,
    type: "ai",
  },
  awards: {
    awrd1: {
      name: "First post award",
      date: new Date(),
    },
    awrd2: {
      name: "Second award - Yay!",
      date: new Date(),
    },
  },
};

console.log(`ENGAGEMENT: ${Number(post5.engagement)}`);

// NOTICE: We have declared a "type" prop, but TS doesnt throw an error, because it is optional

console.log(post5.title); // title cinko
post5.title = "new title of cinko 5";
console.log(post5.title); // new title of cinko 5

console.log(post5.author.type); // ai
// post5.author.type = "robot" error, because type is read-only

// Union Types With Objects
type Cat = {
  name: string;
  purrs: boolean;
  sleeps: boolean;
};

type Dog = {
  name: string;
  barks: boolean;
  wags: boolean;
};

type DogAndCatUnion = Cat | Dog;

let dog: Dog = {
  name: "bobi",
  barks: true,
  wags: true,
};

let hybridAnimal: DogAndCatUnion = {
  name: "Koko",
  barks: true,
  purrs: true,
  sleeps: true, // error without it
  wags: true,
};
// NOTICE: We need to have full properties of at least 1 of the union types. Because we need to be able to cast

hybridAnimal as Cat;
let d = hybridAnimal as Dog;
console.log("dog" + d.wags);

// Usage of read-only params, optional params, index signatures,
type User = {
  readonly id: number;
  name: string;
  age?: number;
  contact: {
    email: string;
    phone?: string;
  };
  preferences: {
    theme: "light" | "dark";
    language: "English" | "Spanish";
  };
  [key: string]: any;
};

let user: User = {
  id: 1,
  name: "John Doe",
  contact: {
    email: "john@example.com",
  },
  preferences: {
    theme: "dark",
    language: "English",
  },
  additionalInfo: "This is an example of an index signature property",
};
// user.id = 5 error

// --- DISCRIMINATING UNIONS ---
type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
// type NetworkFailedState2 = {
//   state: "failed";
//   code2: number;
// };
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Loading...";
    case "failed":
      return `Error: ${state.code}`;
    case "success":
      return `Success: ${state.response.title}`;
  }
}

// --- INTERSECTION TYPES ---
// Union Types With Objects
type HybridAnimal = Cat & Dog;

let hybridAnimal2: HybridAnimal = {
  name: "Koko",
  barks: true,
  purrs: true,
  sleeps: true, // error without it
  wags: true,
};
// NOTICE: We need to use all parameters

// EXERCISE:
type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Seats = {
  [key: string]: string;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};

let airplane: Airplane = {
  model: "Airbus A380",
  flightNumber: "A2201",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "Special Food Ltd",
    address: "484, Some Street, New York",
    phone: 7867856751,
  },
  seats: {
    A1: "John Doe",
    A2: "Mark Doe",
    A3: "Sam Doe",
  },
};
