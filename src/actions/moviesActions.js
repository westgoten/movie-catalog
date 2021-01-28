import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getMovies } from '../api/apiMovieDB'
import { fetchConfiguration } from './configurationActions'
import { fetchGenres } from './genresActions'
import getDefaultMovieFilter from '../utils/getDefaultMovieFilter'
import handleRequestError from '../utils/handleRequestError'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ imagesConfig, filter = getDefaultMovieFilter(), page = 1 },
		{ rejectWithValue, dispatch }
	) => {
		try {
			const response = await getMovies(filter, page)
			if (!imagesConfig) {
				dispatch(fetchConfiguration())
				dispatch(fetchGenres())
			}
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

export const setPaginatorSize = createAction(
	'setPaginatorSize',
	(paginatorSize, totalPages) => ({
		payload: {
			paginatorSize,
			totalPages
		}
	})
)

export const initializePaginator = createAction('initializePaginator')

export const changeCurrentPage = createAction(
	'changeCurrentPage',
	(page, totalPages) => ({
		payload: {
			page,
			totalPages
		}
	})
)
