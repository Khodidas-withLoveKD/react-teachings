/*
 * var vs let vs const
 */

// * var
// * var always has global scope - no block scoping
// example of block
{
	x = 10
	console.log('INSIDE block x = ', x)
}
console.log('OUTSIDE block x = ', x)

// var example
{
	var y = 10
	// console.log('INSIDE block y = ', y)
}
// console.log('OUTSIDE block y = ', y)

// reassigning issue example
var z = 10
// console.log('TOP OUTSIDE block z = ', z)
{
	var z = 20
	// console.log('INSIDE AGAIN block z = ', z)
}
// console.log('OUTSIDE block z = ', z)

//===== LET ===========
// let has blocked scope and should be used while reassinging varaibles
let a = 10 // memory = 1 -> memory[1] = 10
a = 20 // memory = 2 -> memory[2] = 20

// console.log('TOP OUTSIDE block a = ', a)
{
	let a = 20
	// console.log('INSIDE block a = ', a)
	a = 30
	// console.log('AGAIN AGAIN block a = ', a)
}
// console.log('OUTSIDE block a = ', a)

//===== CONST ===========
// const has blocked scope and should be used for varaibles that do not need to be reassigned
const c = 10
// console.log('TOP OUTSIDE block c = ', c)
{
	const c = 20
	// console.log('INSIDE block c = ', c)
	// c = 30
	// console.log('AGAIN AGAIN block c = ', c)
}
// console.log('OUTSIDE block c = ', c)

// memory -> arr = 123
// memory[123] -> arr = [0,2,3]
// reassignment
// memory[456] = new_arr
// const arr = [1, 2, 3]
// console.log('kd BEOFRE arr:', arr)
// arr[0] = 0 // will it work?
// console.log('kd arr:', arr)
// arr = [4, 5, 6] // will it work?

// let obj = { name: 'KD', company: 'Engati' }
// console.log('kd obj:', obj)
// obj.name = 'Ajay'
// console.log('kd obj:', obj)
// obj = { name: 'Aryan', company: 'Engati' }
// console.log('kd obj:', obj)
