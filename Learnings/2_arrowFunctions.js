/*
 * What are arrow functions?
 * -> More readable/shorter way of representing a normal functions
 */

function normalFunction() {
	return 1 + 2
}

const normalArrowFunction = () => {
	return 1 + 2
}

// console.log('kd normalFunction output:', normalFunction())
// console.log('kd normalArrowFunction:', normalArrowFunction())

function noArgs() {
	const outputString = 'My name is KD'
	return outputString
}
// console.log('kd noArgs:', noArgs())

const noArgsArrow = () => 'My name is KD'
// console.log('kd noArgsArrow:', noArgsArrow())

function oneArg(name) {
	const outputString = 'My name is ' + name
	return outputString
}
// console.log('kd oneArg:', oneArg('KD'))

const oneArgArrow = (name) => 'My name is ' + name
// console.log('kd oneArgArrow:', oneArgArrow('KD'))

function twoArgs(name, age) {
	const outputString = `My name is ${name} and age is ${age}` // notice the difference in string representation
	return outputString
}

const twoArgsArrow = (name, age) => `My name is ${name} and age is ${age}`

function summation(num1, num2, num3) {
	return num1 + num2 + num3
}

const summationArrow = (num1, num2, num3) => num1 + num2 + num3

function ifElse(condition) {
	if (condition) {
		return 'Condition is true'
	} else {
		return 'Condition is false'
	}
}

const ifElseArrow = (condition) =>
	condition ? 'Condition is true' : 'Condition is false'

function calculator(num1, num2, doSum) {
	if (doSum) {
		return num1 + num2
	} else {
		return num1 - num2
	}
}

const calculatorArrow = (num1, num2, doSum) =>
	doSum ? num1 + num2 : num1 - num2

console.log('kd calculator:', calculatorArrow(2, 1, 'KD'))
