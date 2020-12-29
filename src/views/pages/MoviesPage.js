import { useRouteMatch } from 'react-router-dom'
import MoviesTabs from '../components/MoviesTabs'
import MoviesGrid from '../components/MoviesGrid'
import MoviesPaginator from '../components/MoviesPaginator'
import PageNotFound from '../components/PageNotFound'
import movieFilters from '../../utils/consts/movieFilters'
import isPageValid from '../../utils/isPageValid'

function MoviesPage() {
	const match = useRouteMatch()
	const movieFilter = match.params.movieFilter
	const page = match.params.page

	return match.path === '/' ||
		(movieFilters[movieFilter] && isPageValid(page)) ? (
		<div>
			<MoviesTabs />
			<MoviesGrid />
			<MoviesPaginator />
		</div>
	) : (
		<PageNotFound />
	)
}

export default MoviesPage
