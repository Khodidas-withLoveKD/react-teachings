import { useEffect } from 'react'

const GitHubProject = () => {
	// useEffect(() => {
	// 	fetch('https://api.github.com/users/{github_handle}')
	// 		.then((response) => response.json())
	// 		.then((resp) => {
	// 			console.log('kd resp:', resp)
	// 			// avatar_url - DP
	// 			// company
	// 			// email
	// 			// profileUrl = html_url
	// 			// repos_url
	// 		})
	// }, [])

	const searchInput = () => (
		<div>
			<input type="search" />
		</div>
	)

	return <>{searchInput()}</>
}

export default GitHubProject
