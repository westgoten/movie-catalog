import { useRouteMatch } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import movieFilters from '../../utils/consts/movieFilters'
import isPageValid from '../../utils/isPageValid'

function MoviesPage() {
	const match = useRouteMatch()
	const movieFilter = match.params.movieFilter
	const page = match.params.page

	return movieFilters[movieFilter] && isPageValid(page) ? (
		<h1>Movie List</h1>
	) : (
		<PageNotFound />
	)
}

export default MoviesPage
