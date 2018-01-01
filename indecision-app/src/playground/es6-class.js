
// Car - make, model, vin.
// getDescription. (string description)

class Person {

    // constructor : ~ 는 invalid.
    constructor(name = "noname", age = 0) {
        this.name = name; // || "noname";
        this.age = age;
    } // don't need comma.
    print() {
        console.log(this.name, this.age);
    }
    getGreeting() {
        return `Hi! I am ${this.name} ! My age is ${this.age}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major = undefined) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        // override.
        return `${super.getDescription()} my major is ${this.hasMajor() ? this.major : 'undecided'}`;
        //return 'testing';
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation = undefined) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation() {
        return !!this.homeLocation;
    }

    getGreeting(){
        return `${super.getGreeting()} my location is ${this.hasLocation() ? this.homeLocation : 'noloc'}`;
    }
}

// const me = new Person("kim", 15);
// me.print();
//
// console.log(me.getGreeting());
//
// const other = new Person();
// console.log(other.getGreeting());

const me = new Student("kim", 26, 'computer science');
//console.log(me.getDescription());
console.log(me.getDescription());

console.log(me.hasMajor());

const other = new Student();
console.log(other.hasMajor());
console.log(other.getDescription());

const test = new Traveler("tv", 100, "seoul");
console.log(test.getGreeting());

const test2 = new Traveler();
console.log(test2.getGreeting());
