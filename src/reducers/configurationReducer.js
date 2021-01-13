import { createReducer } from '@reduxjs/toolkit'
import { fetchConfiguration } from '../actions/configurationActions'

const initialState = {
	imagesConfig: null,
	isRequestPending: true,
	requestError: null
}

const configurationReducer = createReducer(
	initialState,
	{
		[fetchConfiguration.pending]: (state) => ({
			...state,
			isRequestPending: true,
			requestError: null
		}),
		[fetchConfiguration.fulfilled]: (state, action) => ({
			...state,
			imagesConfig: action.payload.images,
			isRequestPending: false,
			requestError: null
		}),
		[fetchConfiguration.rejected]: (state, action) => ({
			...state,
			isRequestPending: false,
			requestError: action.payload
		})
	},
	[],
	(state) => state
)

export default configurationReducer
