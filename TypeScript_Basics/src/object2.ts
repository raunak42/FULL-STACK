function Greet(person: {
    name: string,
    age: number
}): string {
    return `Hello Mr.${person.name}, glad to know you're ${person.age} years old`;
}


let person1 = {
    name: "Raunak",
    age: 20
};

console.log(Greet(person1))