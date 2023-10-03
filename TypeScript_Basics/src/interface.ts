interface Person {
    name: string,
    age: number
};

function greet(person: Person): String {
    return `Hello Mr. ${person.name}, happy ${person.age}'th birthday.`
};


let person2 = {
    name: "raunak",
    age: 28
};

console.log(greet(person2))