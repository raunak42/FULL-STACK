import { AnimalInterface, PersonInterface } from "./inter+class";

function Greet(person: PersonInterface) {
    return "Hello " + person.name + " you must be " + person.age;
}

console.log(Greet({
    name: "Raunak",
    age: 32,
    genderProps: {
        gender: "M",
        orientation: "bi",
        pronouns: "he/him"
    }
}))

function AnimalDetails(animal: AnimalInterface) {
    return `This is a ${animal.species}, ${animal.pronouns} lives in ${animal.habitat} and oriented in a ${animal.orientation} way.`
}

console.log(AnimalDetails({
    species: "Panthera Leo",
    habitat: "savanna",
    gender: "F",
    pronouns: "they",
    orientation: "straight"
}))