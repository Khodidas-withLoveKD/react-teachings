import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/Practice/actions.js'

const Counter = () => {
	const countValue = useSelector((state) => state.value)
	console.log('kd countValue:', countValue)
	const dispatch = useDispatch()

	const incrementValue = () => dispatch(increment())
	const decrementValue = () => dispatch(decrement())

	return (
		<>
			<button onClick={incrementValue}>+</button>
			<h1>{countValue}</h1>
			<button onClick={decrementValue}>-</button>
		</>
	)
}

export default Counter
