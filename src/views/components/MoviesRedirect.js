import { Redirect, useRouteMatch } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import movieFilters from '../../utils/consts/movieFilters'
import { SEARCH_PATH, MOVIE_DETAILS_PATH } from '../../utils/consts/routePaths'

function MoviesRedirect() {
	const match = useRouteMatch()
	const url = match.url
	const movieFilter = match.params.movieFilter
	const query = match.params.query

	return movieFilters.get(movieFilter) ? (
		<Redirect to={`/${movieFilter}/1`} />
	) : query ? (
		<Redirect to={`${SEARCH_PATH}/${query}/1`} />
	) : url === SEARCH_PATH || url === MOVIE_DETAILS_PATH ? (
		<Redirect to='/' />
	) : (
		<PageNotFound />
	)
}

export default MoviesRedirect
