// Part 1

console.log("Hello, World!");

// Numbers

console.log(23 + 97);
console.log(2 + 8);
console.log(3 + 10);
console.log(20 + 35);
console.log(10 + 37);
console.log(45 + 27);
console.log(10 + 77);
console.log((4 + 6 + 9) / 77);

// Variables

let a = 10;
console.log(a);

const max = 57;
const actual = max - 13;
const percentage = actual / max;

// Part 2

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

    number = Number(prompt("enter a number"));

    if(number >= 10) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// Math

const c = 1 + 8; // 9
const d = 22 * 3; // 66
const e = 5 % 4; // 1
const f = c - 17; // -8
const g = c + d + e + f; // 68

function math() {
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
}

// Follow

const birthYear = 1948;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";
const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;

function follow() {
	const greeting = "Hello! My name is " + firstName + " " + lastName + " and I am " + (thisYear - birthYear) + " years old.";

	console.log(greeting);

	const improvedgreeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";

	console.log(improvedgreeting);
}