//debugger;

const square = function (x) { return x * x; };
function squareNamed (x) { return x * x; }

const squareArrow = (x) => { return x * x; };

const squareArrowSimplified = x => x * x;

console.log(square(8));
console.log(squareNamed(8));
console.log(squareArrow(8));
console.log(squareArrowSimplified(8));

const getFirstName = fullName => fullName.split(new RegExp(/[ *]/))[0];

console.log(getFirstName("kim*ilsik"));
