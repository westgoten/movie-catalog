import { Redirect, useRouteMatch } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import movieFilters from '../../utils/consts/movieFilters'

function MoviesRedirect() {
	const match = useRouteMatch()
	const movieFilter = match.params.movieFilter

	return movieFilters.get(movieFilter) ? (
		<Redirect to={`/${movieFilter}/1`} />
	) : (
		<PageNotFound />
	)
}

export default MoviesRedirect
