import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/apiMovieDB'
import movieFilters from '../utils/consts/movieFilters'
import handleRequestError from '../utils/handleRequestError'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ filter = Array.from(movieFilters.keys())[0], page = 1 },
		{ rejectWithValue }
	) => {
		try {
			const response = await getMovies(filter, page)
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
