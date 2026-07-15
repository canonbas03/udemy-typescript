/*/
// MAPPED TYPES

// Partial type
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

// Conditional types
type Exclude<T, U> = T extends U ? never : T;

// If T is assignable to U, return never (remove it), otherwise return T (keep it).
// Never is TypeScript's way of saying "this type doesn't exist" — anything typed as never gets removed from a union.

type Animals = "lion" | "giraffe" | "snake" | "crocodile";
type Reptiles = "snake" | "crocodile";

type Mammals = Exclude<Animals, Reptiles>;
// becomes: "lion" | "giraffe"

// "lion"      extends Reptiles ? never : "lion"      → "lion"     kept
// "giraffe"   extends Reptiles ? never : "giraffe"   → "giraffe"  kept
// "snake"     extends Reptiles ? never : "snake"     → never     gets removed
// "crocodile" extends Reptiles ? never : "crocodile" → never     gets removed

// Another practical example:
type Actions = "walk" | "run" | "swim" | "fly";
type LionActions = Exclude<Actions, "swim" | "fly">;
// "walk" | "run"

//*/
// becomes:
// {
//   name: string;
//   email: string;
// }
function getPublicUser(user) {
    const { password, age, ...rest } = user; // destructing user
    return rest; // only name and email
}
const color = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [225, 255, 0],
};
const redComp = color.red[0];
const greenVal = color.green.toUpperCase();
export {};
//*/
//# sourceMappingURL=index.js.map