// * SPREAD operator (...)
// * used for "spreading" out all the values of an iterable object viz. array and string
const arr = [1, 2, 3]
// console.log('kd arr:', arr)
// console.log('kd arr:', ...arr)

const obj = { name: 'KD', company: 'Engati' }
// console.log('kd obj:', obj)
// console.log('kd obj:', ...obj)

// const arr2 = [4, 5, 6]
// console.log('kd arr2:', arr2)
// console.log('kd arr2:', ...arr2)

const arr3 = [7, 8, 9]
// const arr4 = [...arr, ...arr2, ...arr3] // make it [1, 2, 3....9]
// console.log('kd arr4:', arr4)
// console.log('kd arr4:', ...arr4)

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
	arr2: [1, 2],
}
// console.log('kd employee:', employee)
// console.log('kd data:', data)
// console.log('name = ', employee?.printName())
// console.log('name = ', employee?.printDOB?.())
// console.log('arr = ', employee?.arr2?.[1])

// console.log('kd Hobby:', employee.hobby)
const andCheck = employee && employee.DOB && employee.DOB.month
// console.log('kd andCheck:', andCheck)
// console.log('kd BOOL andCheck:', !!andCheck)

// const errorObj = employee.hobby.name
const opChaining = employee?.hobby?.name
// console.log('kd opChaining:', opChaining)
// console.log('kd errorObj:', errorObj)

// console.log('kd Hobby:', employee && employee.hobby.name)
// console.log('kd printName:', employee.printName())
// console.log('kd printName:', employee.printDOB?.())

// * Nullish Colleasing (??)
// * returns its right-hand side operand when its left-hand side operand is null or undefined,
// * and otherwise returns its left-hand side operand.

const foo = null ?? 'default null string'
// console.log(foo)

const foo2 = undefined ?? 'default STRING with UNDEFINED'
// console.log('kd foo2:', foo2)

const baz = 0 ?? 42
// console.log(baz)

const b = false
const c = 22
const a = b ?? c
// console.log('kd a:', a)

// * destructuring ({}, [])
// * used for "spreading" out all the values of an iterable object viz. array and string
const employeeObj = {
	name: 'KD',
	DOB: {
		date: '06',
	},
	printName: () => 'My name is ' + employee.name,
	arr2: [1, 2],
}
// console.log(employeeObj.name)
const { name, DOB, printName, arr2 } = employeeObj
// console.log('kd DOB:', DOB.date)
const { date } = DOB
// console.log('kd name:', name)

const smallNums = [1, 2]
// const num1 = smallNums[0]
// const num2 = smallNums[1]
// const [num1, num2] = smallNums
// console.log('kd num2:', num2)
// console.log('kd num1:', num1)
// const [num1, num2] = smallNums
// Question?
const [num1, num2, num3] = smallNums
// console.log('kd num3:', num3) // output?

const nums = [1, 2, 3, 4, 5, 6, 7]
const [one, two, ...rest] = nums
// console.log('kd rest:', rest)
// console.log('kd rest:', ...rest)
// console.log('kd one:', one)
// console.log('kd two:', two)
// const [one, two, ...rest] = nums

const employee2 = {
	name: 'KD',
	DOB: {
		date: '06',
	},
	printName2: () => 'My name is ' + employee2.name,
}

const { printName2 } = employee2
// const a = 10
const doSometing = printName2
console.log('kd doSometing:', doSometing())
// console.log(printName2)
console.log('kd printName2:', printName2())
