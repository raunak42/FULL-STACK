"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi Mr. ${this.name}`;
    }
    tellAge() {
        return `You are ${this.age} years old`;
    }
}
const personA = new Person("Raunak", 21);
const personB = new Person("Boromir", 48);
const personC = new Person("Legolas", 245);
console.log(personA.greet() + " " + personA.tellAge());
//# sourceMappingURL=inter+class.js.map