import { createReducer } from '@reduxjs/toolkit'
import {
	fetchMoviesByFilter,
	fetchMoviesByQuery,
	setPaginatorSize,
	initializePaginator,
	changeCurrentPage
} from '../actions/moviesActions'

const initialState = {
	pagination: null,
	paginator: {
		pages: [],
		start: 0,
		currentIndex: 0,
		end: 0,
		size: 0
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
		[fetchMoviesByQuery.pending]: (state) => ({
			...state,
			isRequestPending: true,
			requestError: null
		}),
		[fetchMoviesByQuery.fulfilled]: (state, action) => ({
			...state,
			pagination: {
				page: action.payload.page,
				totalPages: action.payload.totalPages
			},
			movieList: action.payload.results,
			isRequestPending: false,
			requestError: null
		}),
		[fetchMoviesByQuery.rejected]: (state, action) => ({
			...state,
			isRequestPending: false,
			requestError: action.payload
		}),
		[setPaginatorSize]: (state, action) => {
			console.log('setPaginatorSize: ', action.payload)
			const totalPages = action.payload.totalPages
			const paginatorSize =
				action.payload.paginatorSize <= totalPages
					? action.payload.paginatorSize
					: totalPages
			if (paginatorSize > 0) {
				let start = state.paginator.start
				let end = state.paginator.end
				let current = state.paginator.currentIndex
				let availableSpace = paginatorSize - 1

				for (let i = availableSpace; i >= 0; i--) {
					const pos = current - availableSpace
					if (state.paginator.pages[pos]) {
						start = pos
						availableSpace -= current - start
						break
					}
				}

				if (availableSpace <= 0) {
					end = current
				} else {
					for (let i = availableSpace; i >= 0; i--) {
						const pos = current + availableSpace
						if (state.paginator.pages[pos]) {
							end = pos
							break
						}
					}
				}

				console.log(
					'setPaginatorSize: start ',
					start,
					' end ',
					end,
					' current ',
					current
				)

				return {
					...state,
					paginator: {
						...state.paginator,
						start,
						end,
						size: paginatorSize
					}
				}
			}
			console.log('setPaginatorSize: unable')
			return state
		},
		[initializePaginator]: (state, action) => {
			console.log('initializePaginator')
			const totalPages = action.payload
			console.log('totalPages: ', totalPages)
			if (totalPages !== state.paginator.pages.length) {
				const pages = []
				for (let i = 1; i <= totalPages; i++) pages.push(i)
				return {
					...state,
					paginator: {
						...state.paginator,
						pages,
						start: 0,
						currentIndex: 0,
						end: 0
					}
				}
			}
			console.log('initializePaginator: unable to initialize')
			return state
		},
		[changeCurrentPage]: (state, action) => {
			console.log('changeCurrentPage: ', action.payload)
			if (
				action.payload.page >= 1 &&
				action.payload.page <= action.payload.totalPages
			) {
				const pageIndex = action.payload.page - 1
				if (pageIndex < state.paginator.start) {
					console.log('start')
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
					console.log('end')
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
				}
				console.log('current')
				return {
					...state,
					paginator: {
						...state.paginator,
						currentIndex: pageIndex
					}
				}
			}
			console.log('changeCurrentPage: unable to change page')
			return state
		}
	},
	[],
	(state) => state
)

export default moviesReducer
