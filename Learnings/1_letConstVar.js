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
// console.log('OUTSIDE block x = 'x) // it won't exist here

// var example
{
	var y = 10
	// console.log('INSIDE block y = ', y)
}
// console.log('OUTSIDE block y = 'y)

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
let a = 10
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
	c = 30
	// console.log('AGAIN AGAIN block c = ', c)
}
// console.log('OUTSIDE block c = ', c)

const arr = [1, 2, 3]
arr = [4, 5, 6] // will it work?
arr[0] = 0 // will it work?

const obj = { name: 'KD', company: 'Engati' }
obj = { name: 'Aryan', company: 'Engati' }
obj.name = 'Ajay'
