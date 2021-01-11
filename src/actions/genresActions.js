import { createAsyncThunk } from '@reduxjs/toolkit'
import { getGenres } from '../api/apiMovieDB'

export const fetchGenres = createAsyncThunk(
	'fetchGenres',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await getGenres()
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
