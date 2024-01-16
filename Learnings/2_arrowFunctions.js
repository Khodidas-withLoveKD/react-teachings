/*
 * What are arrow functions?
 * -> More readable/shorter way of representing a normal functions
 */

function normalFunction() {
	return 1 + 2
}
// console.log('kd normalFunction output:', normalFunction())

function noArgs() {
	const outputString = 'My name is KD'
	return outputString
}

function oneArg(name) {
	const outputString = 'My name is ' + name
	return outputString
}

function twoArgs(name, age) {
	const outputString = `My name is ${name} and age is ${age}` // notice the difference in string representation
	return outputString
}

function summation(num1, num2, num3) {
	return num1 + num2 + num3
}

function ifElse(condition) {
	if (condition) {
		return 'Condition is true'
	} else {
		return 'Condition is false'
	}
}

function calculator(num1, num2, doSum) {
	if (doSum) {
		return num1 + num2
	} else {
		return num1 - num2
	}
}
