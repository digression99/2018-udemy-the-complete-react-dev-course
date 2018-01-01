// arguments object - no longer bound with arrow functions.

// this keyword.

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

const addArrow = (a, b) => {
    // error
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 10, 1001));
console.log(addArrow(55, 10, 1001));

const user = {
    name : "kim",
    cities : ['philie','new york', 'dublin'],
    printPlacesLived() {
        const cityMessages = this.cities.map(city => `${this.name} has lived in ${city}.`);
        return cityMessages;
    },
    // printPlacesLived : function() {
    //
    //     this.cities.forEach((city) => {
    //         console.log(this.name + " " + city);
    //     })
    //     //this.cities.forEach((city) => console.log(city));
    // },


    // printPlacesLivedArrow : () => {
    //     // error.
    //     this.cities.forEach((city) => console.log(city));
    // }
};

console.log(user.printPlacesLived());
// user.printPlacesLivedArrow();

const multiplier = {
    numbers : [1, 2, 3, 4, 5],
    multiplyBy : 3,
    multiply() {
        return this.numbers.map(n => n * this.multiplyBy);
    }
};

console.log(multiplier.multiply());


