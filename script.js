// PART 1

console.log("Hello, World!");

// Numbers

console.log(23 + 97); // 120
console.log(2 + 8); // 10
console.log(3 + 10); // 13
console.log(20 + 35); // 55
console.log(10 + 37); // 47
console.log(45 + 27); // 72
console.log(10 + 77); // 87
console.log((4 + 6 + 9) / 77); // 0.2467

// Variables

let num = 10;
console.log(num);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

console.log(percentage) // 0.7719

// PART 2

// Troubleshooting

function troubleshooting() {
    const a = 1;
	const b = 1;

    console.log(a);
    console.log(b);

	let result;

	result = a + b;

    console.log(result);

	return result;
}

// Number Checker

function numberChecker() {
    number = Number(prompt("Enter a number"));

    if(number >= 10) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Math

function math() {
    const a = 1 + 8; // 9
    const b = 22 * 3; // 66
    const c = 5 % 4; // 1
    const d = a - 17; // -8
    const e = a + b + c + d; // 68

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
}

// Follow

function follow() {

    const birthYear = 1948;
    const thisYear = 1965;
    const firstName = "Carlos";
    const lastName = "Stevenson";
    const fullName = firstName + " " + lastName;
    const age = thisYear - birthYear;

	const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

	console.log(greeting);

	const improvedgreeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

	console.log(improvedgreeting);
}

// PART 3

function add7() {
    const number = Number(prompt("enter a number"));
    let result;

    result = number + 7;

    console.log(result);
}

function multiply() {
    const a = Number(prompt("Enter the First Number"));
    const b = Number(prompt("Enter the Second Number"));
    let result;

    result = a * b;

    console.log(result);
}

function capitalize() {
    const a = String(prompt("Enter a String"));
    let result = a.toUpperCase();

    console.log(result)
}

function lastLetter () {
    const a = String(prompt("Enter a String"));
    let result = a.slice(-1);

    console.log(result)
}