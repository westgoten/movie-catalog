import { useRouteMatch } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import { fetchMoviesByFilter } from '../../actions/moviesActions'
import MoviesTabs from '../components/MoviesTabs'
import MoviesGrid from '../components/MoviesGrid'
import MoviesPaginator from '../components/MoviesPaginator'
import PageNotFound from '../components/PageNotFound'
import Loader from '../components/Loader'
import movieFilters from '../../utils/consts/movieFilters'
import isPageValid from '../../utils/isPageValid'
import '../style/css/MoviesPage.css'

function MoviesPage() {
	const dispatch = useDispatch()
	const movieList = useShallowEqualSelector((state) => state.movies.movieList)
	const isRequestPending = useShallowEqualSelector(
		(state) => state.movies.isRequestPending
	)
	const requestError = useShallowEqualSelector(
		(state) => state.movies.requestError
	)

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
		if (isPathValid())
			dispatch(fetchMoviesByFilter({ filter: movieFilter, page }))
		// eslint-disable-next-line
	}, [movieFilter, page, isPathValid])

	return isPathValid() ? (
		<div className='movies-page'>
			<MoviesTabs />
			{isRequestPending ? (
				<Loader />
			) : (
				<>
					<MoviesGrid movieList={movieList} />
					<MoviesPaginator />
				</>
			)}
		</div>
	) : (
		<PageNotFound />
	)
}

export default MoviesPage
