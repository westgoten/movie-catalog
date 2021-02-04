import axios from 'axios'
import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getMovies, searchMovies } from '../api/apiMovieDB'
import getDefaultMovieFilter from '../utils/getDefaultMovieFilter'
import handleRequestError from '../utils/handleRequestError'
import fetchMoviesStartupData from '../utils/fetchMoviesStartupData'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ imagesConfig, filter = getDefaultMovieFilter(), page = 1 },
		{ rejectWithValue, dispatch, signal }
	) => {
		try {
			const source = axios.CancelToken.source()
			setUpAbortSignalListener(signal, source)
			const response = await getMovies(source.token, filter, page)
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
		{ rejectWithValue, dispatch, signal }
	) => {
		try {
			const source = axios.CancelToken.source()
			setUpAbortSignalListener(signal, source)
			const response = await searchMovies(source.token, query, page)
			if (!imagesConfig) fetchMoviesStartupData(dispatch)
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

function setUpAbortSignalListener(signal, source) {
	signal.addEventListener('abort', cancelRequest)
	function cancelRequest() {
		source.cancel()
		signal.removeEventListener('abort', cancelRequest)
	}
}

export const setCurrentMoviesRequest = createAction('setCurrentMoviesRequest')

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
