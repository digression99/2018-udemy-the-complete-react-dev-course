import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

const User = (props) => {
    return (
        <div>
            <p>name : {props.name}</p>
            <p>age : {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp options={['devils den', 'second district']}/>, document.getElementById('app'));
//ReactDOM.render(<User name="kimilsik" age={26} />, document.getElementById('app'));

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
