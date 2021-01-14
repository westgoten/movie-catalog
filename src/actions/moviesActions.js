import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies } from '../api/apiMovieDB'
import fetchImage from '../api/fetchImage'
import movieFilters from '../utils/consts/movieFilters'
import handleRequestError from '../utils/handleRequestError'
import { ORIGINAL_SIZE, POSTER_SIZE } from '../utils/consts/imageSizes'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ imagesConfig, filter = Array.from(movieFilters.keys())[0], page = 1 },
		{ rejectWithValue }
	) => {
		try {
			const response = await getMovies(filter, page)
			const movieList = response.data.results
			if (imagesConfig) {
				const imagesPromises = movieList.map((movie) =>
					fetchImage(getPosterFullPath(imagesConfig, movie))
				)
				const imagesOutputs = await Promise.allSettled(imagesPromises)
				response.data.results.forEach((movie, index) => {
					const imageOutput = imagesOutputs[index]
					if (imageOutput.status === 'fulfilled') {
						movie.posterFullPath = URL.createObjectURL(
							imageOutput.value.data
						)
					}
				})
			}
			return response.data
		} catch (err) {
			console.log(err)
			return handleRequestError(err, rejectWithValue)
		}
	}
)

function getPosterFullPath(imagesConfig, movie) {
	if (imagesConfig.posterSizes.includes(POSTER_SIZE))
		return imagesConfig.baseUrl + POSTER_SIZE + movie.posterPath
	return imagesConfig.baseUrl + ORIGINAL_SIZE + movie.posterPath
}
