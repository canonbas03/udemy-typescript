let person = {
    name: "John",
    age: 22,
}
console.log(person.name)
// person = []; error

let car: Object = {
    brand: "Lambo",
    horsePower: 3000
}
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
}

// newCar = []; error

//  We create a type alias
type Car = {
    brand: string;
    horsePower: number;
}

let newCar2: Car = {
    brand: "Mercedes",
    horsePower: 4444,
}
console.log(newCar2.brand);

let cat: object = {
    name: "Koko",
    legs: 4, 
}
//console.log(cat.name); error

console.log(typeof cat);

// NESTED OBJECTS

type Post = {
    title: string;
    content: string;
    date: Date;
}

let post1: Post = {
    title: "Post Uno",
    content: "La Alegria",
    date: new Date(),
}

let post2 = {
    title: "Post Dos",
    content: "La Alegria 2",
    date: new Date(),
}
console.log(post2.date);

type Author = {
    name: string;
    age: number;
}

type NewPost = {
    title: string;
    content: string;
    date: Date;
    author: Author;
}

let post3: NewPost = {
    title: "Title tres",
    content: "Bangaranga",
    date: new Date(),
    author: {
        name: "Dara",
        age: 27,
    }
}
console.log(post3.author.age);

type NewPost2 = {
    title: string;
    content: string;
    date: Date;
    author: Author;
    awards: Awards;
}

// index signature [key: string]
type Awards = {
    [key: string]: AwardDetails
}

type AwardDetails = {
name: string;
    date: Date;
}

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
        }
    }
}

// --- OPTIONAL PROPERTIES ---
type NewPost3 = {
    title: string;
    content: string;
    date: Date;
    author: Author2;
    awards: Awards;
    engagement?: string;
}

type Author2 = {
    name: string;
    age: number;
    readonly type: "ai" | "human";   
}

let post5: NewPost3 = {
    title: "Title cincko?",
    content: "BabaVanga",
    date: new Date(),
    author:  {
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
        }
    },
}

// NOTICE: We have declared a "type" prop, but TS doesnt throw an error, because it is optionals