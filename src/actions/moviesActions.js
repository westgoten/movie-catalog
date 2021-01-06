import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/apiMovieDB'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async ({ filter, page }, { rejectWithValue }) => {
		try {
			const response = await getMovies(filter, page)
			return response.data
		} catch (err) {
			if (err.response) {
				return rejectWithValue(err.response.data)
			} else if (err.request) {
				return rejectWithValue('Failed to connect to server')
			} else {
				return rejectWithValue(err.message)
			}
		}
	}
)
