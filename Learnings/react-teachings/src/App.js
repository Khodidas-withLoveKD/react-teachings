import './App.css'
import { Provider } from 'react-redux'
import store from './redux/Practice/store'
import Counter from './components/Counter'
import { useState } from 'react'
import Counter2 from './components/Counter2'
import ApiExample2 from './apis/ApiExample2'
import GitHubProject from './githubProject/GitHubProject'
// <Provider store={store}>
// 	<Counter />
// </Provider>

function App() {
	const [total, setTotal] = useState(0)
	const [resetCount, setResetCount] = useState(0)

	return (
		<div className="App">
			{/* <Counter2 setTotal={setTotal} resetCount={resetCount} />
			<Counter2 setTotal={setTotal} resetCount={resetCount} />
			<Counter2 setTotal={setTotal} resetCount={resetCount} />
			<Counter2 setTotal={setTotal} resetCount={resetCount} /> */}
			<GitHubProject />
			<ApiExample2 />
			{/* <h2>The total is {total}</h2>
			<button
				onClick={() => {
					setTotal(0)
					setResetCount((resetCount) => resetCount + 1)
				}}
			>
				reset
			</button> */}
		</div>
	)
}

export default App

// async
// change in state then render
// an activity
