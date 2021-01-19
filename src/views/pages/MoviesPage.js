import { useRouteMatch } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import {
	fetchMoviesByFilter,
	removeOldMoviePosters
} from '../../actions/moviesActions'
import MoviesTabs from '../components/MoviesTabs'
import MoviesGrid from '../components/MoviesGrid'
import MoviesPaginator from '../components/MoviesPaginator'
import PageNotFound from '../components/PageNotFound'
import Loader from '../components/Loader'
import movieFilters from '../../utils/consts/movieFilters'
import isPageValid from '../../utils/isPageValid'

function MoviesPage() {
	const dispatch = useDispatch()

	const movieList = useShallowEqualSelector((state) => state.movies.movieList)
	const areMoviesPending = useShallowEqualSelector(
		(state) => state.movies.isRequestPending
	)
	const requestError = useShallowEqualSelector(
		(state) => state.movies.requestError
	)

	const imagesConfig = useShallowEqualSelector(
		(state) => state.configuration.imagesConfig
	)
	const isConfigurationPending = useShallowEqualSelector(
		(state) => state.configuration.isRequestPending
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
		if (isPathValid() && !isConfigurationPending) {
			dispatch(removeOldMoviePosters())
			dispatch(
				fetchMoviesByFilter({ imagesConfig, filter: movieFilter, page })
			)
		}
	}, [movieFilter, page, isPathValid, isConfigurationPending, imagesConfig])

	return isPathValid() ? (
		<div className='movies-page'>
			<MoviesTabs />
			{areMoviesPending || isConfigurationPending ? (
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
