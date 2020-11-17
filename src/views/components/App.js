import { useEffect } from 'react'
import '../style/App.css'
import * as api from '../../api/apiMovieDB'
import movieFilters from '../../utils/consts/movieFilters'

function App() {
	// Only for testing purposes
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await api.getVideos(121)
				console.log(response.data)
			} catch (error) {
				console.log(error.message)
			}
		}
		fetchData()
	}, [])

	return <div>Hi</div>
}

export default App
