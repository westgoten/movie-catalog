import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGenres } from '../api/apiMovieDB'
import handleRequestError from '../utils/handleRequestError'

export const fetchGenres = createAsyncThunk(
	'fetchGenres',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await getGenres()
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
