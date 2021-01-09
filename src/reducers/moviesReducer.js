import { createReducer } from '@reduxjs/toolkit'
import { fetchMoviesByFilter } from '../actions/moviesActions'

const initialState = {
	movieList: null,
	pending: true,
	error: null
}

const moviesReducer = createReducer(
	initialState,
	{
		[fetchMoviesByFilter.pending]: (state) => ({
			...state,
			pending: true,
			error: null
		}),
		[fetchMoviesByFilter.fulfilled]: (state, action) => ({
			...state,
			movieList: action.payload,
			pending: false,
			error: null
		}),
		[fetchMoviesByFilter.rejected]: (state, action) => ({
			...state,
			pending: false,
			error: action.payload
		})
	},
	[],
	(state) => state
)

export default moviesReducer
