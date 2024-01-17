const counterState = {
	// creatorName: 'KD',
	value: 0,
}

export const counterReducer = (state = counterState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			// cannot mutate the state
			// state.value = state.value + 1
			return { value: state.value + 1 }

		case 'DECREMENT':
			// cannot mutate the state
			// state.value = state.value + 1
			return { value: state.value - 1 }

		default:
			return state
	}
}
