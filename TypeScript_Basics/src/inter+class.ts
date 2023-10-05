interface PersonGenderProperties {
    gender: string;
    orientation: string;
    pronouns: string;
}

export interface PersonInterface {
    name: string;
    age: number;
    genderProps: PersonGenderProperties
}

export interface AnimalInterface extends PersonGenderProperties {
    species: string;
    habitat: string;

}

class Person implements PersonInterface {
    name: string;
    age: number;
    genderProps: PersonGenderProperties;

    constructor(name: string, age: number, genderProps: PersonGenderProperties) {
        this.name = name;
        this.age = age;
        this.genderProps = genderProps;
    }

    greet() {
        return `Hi Mr. ${this.name}`
    }
    tellAge() {
        return `You are ${this.age} years old`
    }
}

const personA = new Person("Raunak", 21, { gender: "male", orientation: "bi", pronouns: "he/him" })
const personB = new Person("Boromir", 48, { gender: "male", orientation: "bi", pronouns: "he/him" })
// const personC = new Person("Legolas", 245)

console.log(personA.greet() + " " + personA.tellAge())
console.log(`${personB.greet()} ${personB.tellAge()}`)