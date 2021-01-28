import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getMovies } from '../api/apiMovieDB'
import fetchImage from '../api/fetchImage'
import { fetchConfiguration } from './configurationActions'
import { fetchGenres } from './genresActions'
import getDefaultMovieFilter from '../utils/getDefaultMovieFilter'
import handleRequestError from '../utils/handleRequestError'
import { ORIGINAL_SIZE, POSTER_SIZE } from '../utils/consts/imageSizes'
import { FULFILLED } from '../utils/consts/settledPromiseStatus'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ imagesConfig, filter = getDefaultMovieFilter(), page = 1 },
		{ rejectWithValue, dispatch }
	) => {
		try {
			const response = await getMovies(filter, page)
			// if (imagesConfig) await addImages(imagesConfig, response)
			// else {
			// 	dispatch(fetchConfiguration())
			// 	dispatch(fetchGenres())
			// }
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

export const removeOldMoviePosters = createAction('removeOldMoviePosters')

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
