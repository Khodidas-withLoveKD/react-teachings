import { useEffect, useState } from 'react'

const ApiExample2 = () => {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/todos/1')
		// 	.then((response) => response.json())
		// 	.then((json) => console.log(json))

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((todos) => {
				console.log('kd todos:', todos)
				setTodos(todos)

				todos.map((todo) => {
					console.log('kd todo TITLE:', todo.title)
				})
			})
	}, [])

	return (
		<>
			<h1>THis is the component</h1>
			<div>Titles</div>
			{todos.map((todo) => (
				<div
					style={{
						display: 'flex',
						gap: '1rem',
						justifyContent: 'center',
						alignItems: 'center',
						padding: '1rem',
						borderBottom: '1px solid red',
					}}
				>
					<div key={todo.id}>{todo.title}</div>
					<button onClick={() => {}}>-</button>
				</div>
			))}
		</>
	)
}

export default ApiExample2
