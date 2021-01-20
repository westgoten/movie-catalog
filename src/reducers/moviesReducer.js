import { createReducer } from '@reduxjs/toolkit'
import {
	fetchMoviesByFilter,
	removeOldMoviePosters,
	initializePaginator,
	changeCurrentPage
} from '../actions/moviesActions'

const LAST_PAGE_LINK_INDEX = 9

const initialState = {
	pagination: null,
	paginator: {
		pages: [],
		start: 0,
		currentIndex: 0,
		end: LAST_PAGE_LINK_INDEX
	},
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
			...state,
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
		},
		[initializePaginator]: (state) => {
			if (
				state.pagination &&
				state.pagination.totalPages !== state.paginator.pages.length
			) {
				const pages = []
				for (let i = 1; i <= state.pagination.totalPages; i++)
					pages.push(i)
				return {
					...state,
					paginator: {
						...state.paginator,
						pages,
						start: 0,
						currentIndex: 0,
						end:
							LAST_PAGE_LINK_INDEX < state.pagination.totalPages
								? LAST_PAGE_LINK_INDEX
								: state.pagination.totalPages - 1
					}
				}
			}
			return state
		},
		[changeCurrentPage]: (state, action) => {
			if (
				state.pagination &&
				action.payload >= 1 &&
				action.payload <= state.pagination.totalPages
			) {
				const pageIndex = action.payload - 1
				if (pageIndex < state.paginator.start) {
					return {
						...state,
						paginator: {
							...state.paginator,
							start: pageIndex,
							currentIndex: pageIndex,
							end:
								state.paginator.end -
								(state.paginator.start - pageIndex)
						}
					}
				} else if (pageIndex > state.paginator.end) {
					return {
						...state,
						paginator: {
							...state.paginator,
							start:
								state.paginator.start +
								(pageIndex - state.paginator.end),
							currentIndex: pageIndex,
							end: pageIndex
						}
					}
				} else if (pageIndex !== state.paginator.currentIndex) {
					return {
						...state,
						paginator: {
							...state.paginator,
							currentIndex: pageIndex
						}
					}
				}
			}
			return state
		}
	},
	[],
	(state) => state
)

export default moviesReducer
