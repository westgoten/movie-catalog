export default function handleRequestError(err, rejectWithValue) {
	if (err.response) {
		return rejectWithValue(err.response.data)
	} else if (err.request) {
		return rejectWithValue('Failed to connect to server')
	} else {
		return rejectWithValue(err.message)
	}
}
