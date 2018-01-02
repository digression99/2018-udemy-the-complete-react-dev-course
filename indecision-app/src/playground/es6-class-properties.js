
class OldSyntax {
    constructor() {
        this.name = 'mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `hi, my name is ${this.name}`;
    }
}
const os = new OldSyntax();
console.log(os.getGreeting());
const getGreeting = os.getGreeting; // breaking binds.
console.log(getGreeting());

class NewSyntax {
    name = 'jen';
    getGreeting = () => {
        return `hi, my name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
//console.log(newSyntax.getGreeting());

const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());