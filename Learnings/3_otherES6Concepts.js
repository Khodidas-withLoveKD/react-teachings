// SPREAD operator (...)
// used for "spreading" out all the values of an iterable object viz. array and string
const arr = [1, 2, 3]
// console.log('kd arr:', ...arr)
// console.log('kd arr:', arr)

const obj = { name: 'KD', company: 'Engati' }
// console.log('kd obj:', obj)
// console.log('kd obj:', ...obj)

const arr2 = [...arr, 4, 5, 6]
// console.log('kd arr2:', ...arr2)

const arr3 = [7, 8, 9]
const arr4 = [] // make it [1, 2, 3....9]

// * optional chaninig (?.)
// * accesses an object's property or calls a function.
// * If the object accessed or function called using this operator is undefined or null,
// * the expression short circuits and evaluates to undefined instead of throwing an error.
const employee = {
	name: 'KD',
	DOB: {
		date: '06',
	},
	printName: () => 'My name is ' + employee.name,
}
// console.log('kd employee:', employee)
// console.log('kd Hobby:', employee.hobby)
// console.log('kd printName:', employee.printName())
// console.log('kd printName:', employee.printDOB?.())

// * Nullish Colleasing (??)
// * returns its right-hand side operand when its left-hand side operand is null or undefined,
// * and otherwise returns its left-hand side operand.
const foo = null ?? 'default null string'
// console.log(foo);
const foo2 = undefined ?? 'default STRING with UNDEFINED'
// console.log('kd foo2:', foo2)

const baz = 0 ?? 42
// console.log(baz);
const b = null
const c = 22
const a = b ?? c
// console.log('kd a:', a)

// destructuring ({})
// used for "spreading" out all the values of an iterable object viz. array and string
const smallNums = [1, 2]
const [num1, num2] = smallNums
// Question?
// const [num1, num2, num3] = smallNums
// console.log('kd num3:', num3)  // output?

const nums = [1, 2, 3, 4, 5, 6, 7]
const [one, two, ...rest] = nums

const employee2 = {
	name: 'KD',
	DOB: {
		date: '06',
	},
	printName: () => 'My name is ' + employee.name,
}
// const {name, DOB, printName} = employee2
