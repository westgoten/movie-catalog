import { useRouteMatch } from 'react-router-dom'
import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import useShallowEqualSelector from '../../utils/hooks/useShallowEqualSelector'
import {
	fetchMoviesByFilter,
	fetchMoviesByQuery,
	setCurrentMoviesRequest
} from '../../actions/moviesActions'
import MoviesTabs from '../components/MoviesTabs'
import MoviesGrid from '../components/MoviesGrid'
import MoviesPaginator from '../components/MoviesPaginator'
import MoviesSearchTitle from '../components/MoviesSearchTitle'
import ErrorWarning from '../components/ErrorWarning'
import PageNotFound from '../components/PageNotFound'
import Loader from '../components/Loader'
import movieFilters from '../../utils/consts/movieFilters'
import isPageValid from '../../utils/isPageValid'

function MoviesPage() {
	const dispatch = useDispatch()

	const movieList = useShallowEqualSelector((state) => state.movies.movieList)
	const pagination = useShallowEqualSelector(
		(state) => state.movies.pagination
	)
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
	const query = match.params.query
	const page = match.params.page
	const isPathValid = useCallback(
		() =>
			match.path === '/' ||
			((isQueryValid(query) || isMovieFilterValid(movieFilter)) &&
				isPageValid(page)),
		[match.path, movieFilter, page, query]
	)

	function isQueryValid(query) {
		return query && query.length > 0 ? true : false
	}

	function isMovieFilterValid(movieFilter) {
		return movieFilters.get(movieFilter) ? true : false
	}

	useEffect(() => {
		console.log('MoviesPage useEffect')
		if (isPathValid() && !isConfigurationPending) {
			console.log('MoviesPage useEffect: dispatch')
			if (query) {
				console.log('Dispatch SEARCH!!')
				const promise = dispatch(
					fetchMoviesByQuery({ imagesConfig, query, page })
				)
				dispatch(setCurrentMoviesRequest(promise))
			} else {
				console.log('Dispatch FILTER!!')
				const promise = dispatch(
					fetchMoviesByFilter({
						imagesConfig,
						filter: movieFilter,
						page
					})
				)
				dispatch(setCurrentMoviesRequest(promise))
			}
		}
		// eslint-disable-next-line
	}, [
		movieFilter,
		page,
		isPathValid,
		isConfigurationPending,
		imagesConfig,
		query
	])

	return isPathValid() ? (
		<div className='movies-page'>
			{isLoading() ? (
				<Loader />
			) : hasRequestError() ? (
				<ErrorWarning requestError={requestError} query={query} />
			) : (
				<>
					{query ? (
						<MoviesSearchTitle query={query} />
					) : (
						<MoviesTabs />
					)}
					<MoviesGrid movieList={movieList} />
				</>
			)}
			<MoviesPaginator
				pagination={pagination}
				match={match}
				isInvisible={isPaginatorInvisible()}
			/>
		</div>
	) : (
		<PageNotFound />
	)

	function isLoading() {
		return areMoviesPending || isConfigurationPending
	}

	function hasRequestError() {
		return requestError || !movieList || movieList.length === 0
	}

	function isPaginatorInvisible() {
		return isLoading() || hasRequestError()
	}
}

export default MoviesPage
