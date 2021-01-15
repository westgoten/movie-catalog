import { createReducer } from '@reduxjs/toolkit'
import {
	fetchMoviesByFilter,
	removeOldMoviePosters
} from '../actions/moviesActions'

const initialState = {
	pagination: null,
	movieList: [],
	isRequestPending: true,
	requestError: null
}

const moviesReducer = createReducer(
	initialState,
	{
		[fetchMoviesByFilter.pending]: (state) => ({
			...state,
			isRequestPending: true,
			requestError: null
		}),
		[fetchMoviesByFilter.fulfilled]: (state, action) => ({
			pagination: {
				page: action.payload.page,
				totalPages: action.payload.totalPages
			},
			movieList: action.payload.results,
			isRequestPending: false,
			requestError: null
		}),
		[fetchMoviesByFilter.rejected]: (state, action) => ({
			...state,
			isRequestPending: false,
			requestError: action.payload
		}),
		[removeOldMoviePosters]: (state) => {
			if (state.movieList.length > 0) {
				return {
					...state,
					movieList: state.movieList.map((movie) => {
						URL.revokeObjectURL(movie.posterFullPath)
						return { ...movie, posterFullPath: null }
					})
				}
			}
			return state
		}
	},
	[],
	(state) => state
)

export default moviesReducer
