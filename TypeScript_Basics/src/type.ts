type PersonInterface = {
    name: string;
    age: number;
};

function GreetPerson(person: PersonInterface) {
    return "Hola " + person.name + ", it is nice to see your " + person.age + " year old ass."
};

console.log(GreetPerson({
    name: "Raunak",
    age: 54
}))
