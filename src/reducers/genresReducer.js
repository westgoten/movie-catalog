import { createReducer } from '@reduxjs/toolkit'
import { fetchGenres } from '../actions/genresActions'

const initialState = {
	genreList: [],
	isRequestPending: true,
	requestError: null
}

const genresReducer = createReducer(
	initialState,
	{
		[fetchGenres.pending]: (state) => ({
			...state,
			isRequestPending: true,
			requestError: null
		}),
		[fetchGenres.fulfilled]: (state, action) => ({
			genreList: action.payload.genres,
			isRequestPending: false,
			requestError: null
		}),
		[fetchGenres.rejected]: (state, action) => ({
			...state,
			isRequestPending: false,
			requestError: action.payload
		})
	},
	[],
	(state) => state
)

export default genresReducer
