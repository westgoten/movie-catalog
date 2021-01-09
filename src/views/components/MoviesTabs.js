import { useHistory, useRouteMatch } from 'react-router-dom'
import movieFilters from '../../utils/consts/movieFilters'
import '../style/css/MoviesTabs.css'

function MoviesTabs() {
	const history = useHistory()
	const match = useRouteMatch()
	const movieFilter = match.params.movieFilter

	return (
		<div className='tab-container'>
			{Array.from(movieFilters.keys()).map((key, index) => (
				<button
					key={key}
					className={`tab${
						isTabSelected(key, index) ? ' tab-selected' : ''
					}`}
					onClick={() => history.push(`/${key}`)}>
					{movieFilters.get(key)}
				</button>
			))}
		</div>
	)

	function isTabSelected(key, index) {
		if (movieFilter) return key === movieFilter
		if (match.path === '/' && index === 0) return true
		return false
	}
}

export default MoviesTabs
