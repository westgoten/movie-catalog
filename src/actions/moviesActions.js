import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getMovies, searchMovies } from '../api/apiMovieDB'
import getDefaultMovieFilter from '../utils/getDefaultMovieFilter'
import handleRequestError from '../utils/handleRequestError'
import fetchMoviesStartupData from '../utils/fetchMoviesStartupData'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ imagesConfig, filter = getDefaultMovieFilter(), page = 1 },
		{ rejectWithValue, dispatch }
	) => {
		try {
			const response = await getMovies(filter, page)
			if (!imagesConfig) fetchMoviesStartupData(dispatch)
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

export const fetchMoviesByQuery = createAsyncThunk(
	'fetchMoviesByQuery',
	async (
		{ imagesConfig, query, page = 1 },
		{ rejectWithValue, dispatch }
	) => {
		try {
			const response = await searchMovies(query, page)
			if (!imagesConfig) fetchMoviesStartupData(dispatch)
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
