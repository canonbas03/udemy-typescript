type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Animal = {
  name: string;
  age: number;
  isMature: boolean;
};

type PartialAnimal = Partial<Animal>;

const partAnim: PartialAnimal = {};
console.log();
// becomes:
// {
//     name?: string;
//     age?: number;
//     isMature?: boolean;
// }

const giraffe1: Animal = {
  name: "Giraffe1",
  age: 12,
  isMature: true,
};
function updateAnimal(animal: Animal, changes: Partial<Animal>): Animal {
  return { ...animal, ...changes };
}

// Scenario, we want to change ONLY the name of giraffe Animal obj
// WITHOUT Partial — must pass all 3 fields even if you only want to change name
updateAnimal(giraffe1, { name: "Jeff", age: 12, isMature: true });

// WITH Partial — only pass what you want to change
updateAnimal(giraffe1, { name: "Jeff" });
updateAnimal(giraffe1, { name: "New Name" }); // only update name, rest stays

function updateAnimal1(animal: Animal, changes: Partial<Animal>): Animal {
  return { ...animal, ...changes };
  // { name: "Giraffe1", age: 12, isMature: true } <- original
  //                     +
  // { name: "Jeff" }                               <- changes
  //                     =
  // { name: "Jeff", age: 12, isMature: true }      <- result
}

// The spread ...animal copies all original values, then ...changes overwrites only the ones you passed in. Properties you didn't pass stay as they were.
