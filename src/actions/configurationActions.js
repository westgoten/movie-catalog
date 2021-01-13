import { createAsyncThunk } from '@reduxjs/toolkit'
import { getConfiguration } from '../api/apiMovieDB'
import handleRequestError from '../utils/handleRequestError'

export const fetchConfiguration = createAsyncThunk(
	'fetchConfiguration',
	async (arg, { rejectWithValue }) => {
		try {
			const response = await getConfiguration()
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)
