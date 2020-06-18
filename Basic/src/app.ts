/* Day 2 | Classwork | Basic
Basic 1:

Create a class constructor named Person that should hold information about name, age,  jobTitle and have a function that will return a string “Hello there, My name is (name) and I am (age) years old, and I am a (jobTitle)”



Basic 2


Create a class based on the Person class and add some other properties like salary, jobLocation and a function that will call the function that is inside the Person class and add “and I get (salary) every month, and I work in (jobLocation)”

 */

class Person {
    name: string
    age: number
    jobTitle: string

    constructor(name: string, age: number, jobTitle: string) {
        this.name = name
        this.age = age
        this.jobTitle = jobTitle
    }

    greet(): string {
        return `Hello there, My name is ${this.name} and I am ${this.age} years old, and I am a ${this.jobTitle}`
    }
}

const person1 = new Person('Someone', 20, 'Developer')

console.log(person1.greet())

class ExtendedPerson extends Person {

    constructor(public name: string, public age: number, public jobTitle: string, public salary: number, public jobLocation: string) {
        super(name, age, jobTitle)

    }

    greet(): string {
        return `${super.greet()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
    }
}

const person2 = new ExtendedPerson('Someone', 30, 'Developer', 1200, 'Vienna')

console.log(person2.greet())
