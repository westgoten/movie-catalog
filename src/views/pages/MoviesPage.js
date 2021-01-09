import { useRouteMatch } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesByFilter } from '../../actions/moviesActions'
import MoviesTabs from '../components/MoviesTabs'
import MoviesGrid from '../components/MoviesGrid'
import MoviesPaginator from '../components/MoviesPaginator'
import PageNotFound from '../components/PageNotFound'
import movieFilters from '../../utils/consts/movieFilters'
import isPageValid from '../../utils/isPageValid'

function MoviesPage() {
	const dispatch = useDispatch()

	const match = useRouteMatch()
	const movieFilter = match.params.movieFilter
	const page = match.params.page
	const isPathValid = useCallback(
		() =>
			match.path === '/' ||
			(movieFilters.get(movieFilter) && isPageValid(page)),
		[match.path, movieFilter, page]
	)

	useEffect(() => {
		if (isPathValid() && movieFilter)
			dispatch(fetchMoviesByFilter({ filter: movieFilter, page }))
		else if (isPathValid())
			dispatch(
				fetchMoviesByFilter({
					filter: Array.from(movieFilters.keys())[0],
					page: 1
				})
			)
	}, [movieFilter, page, isPathValid])

	return isPathValid() ? (
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
