import { useEffect, useState } from 'react'
import React from 'react'

const Counter2 = (props) => {
	// console.log('kd props:', props)
	const { setTotal, resetCount } = props

	const [count, setCount] = useState(0)
	const [resetCounter, setResetCounter] = useState(false)
	const [arr, setArr] = useState([])

	const increment = () => {
		setCount(count + 1)
		setTotal((total) => total + 1)
	}

	const decrement = () => {
		setCount((count) => count - 1)
		setTotal((total) => total - 1)
	}

	const resetCountFn = () => setCount(0)

	const addElementToArray = () => setArr([...arr, count])

	useEffect(() => {
		setCount(0)
	}, [resetCounter])

	useEffect(() => {
		resetCountFn()
	}, [resetCount])

	useEffect(() => {
		// console.log('kd RENDER HAPPENED useEffect:')
		// console.log('kd arr:', arr)
	})

	useEffect(() => {
		// console.log('kd INITIAL MOUNT HAPPENED useEffect:')
	}, [arr])

	return (
		<React.Fragment>
			<h2>Count is {count}</h2>
			<button onClick={increment}>+</button>
			<button onClick={() => setResetCounter(!resetCounter)}>Reset</button>
			<button onClick={decrement}>-</button>
			<button onClick={addElementToArray}>Add element</button>
		</React.Fragment>
	)
}

export default Counter2
