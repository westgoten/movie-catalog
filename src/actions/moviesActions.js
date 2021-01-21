import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getMovies } from '../api/apiMovieDB'
import fetchImage from '../api/fetchImage'
import getDefaultMovieFilter from '../utils/getDefaultMovieFilter'
import handleRequestError from '../utils/handleRequestError'
import { ORIGINAL_SIZE, POSTER_SIZE } from '../utils/consts/imageSizes'
import { FULFILLED } from '../utils/consts/settledPromiseStatus'

export const fetchMoviesByFilter = createAsyncThunk(
	'fetchMoviesByFilter',
	async (
		{ imagesConfig, filter = getDefaultMovieFilter(), page = 1 },
		{ rejectWithValue }
	) => {
		try {
			const response = await getMovies(filter, page)
			if (imagesConfig) await addImages(imagesConfig, response)
			return response.data
		} catch (err) {
			return handleRequestError(err, rejectWithValue)
		}
	}
)

async function addImages(imagesConfig, response) {
	const movieList = response.data.results
	const imagesPromises = movieList.map((movie) =>
		fetchImage(getPosterFullPath(imagesConfig, movie))
	)
	const imagesOutputs = await Promise.allSettled(imagesPromises)
	movieList.forEach((movie, index) => {
		const imageOutput = imagesOutputs[index]
		if (imageOutput.status === FULFILLED)
			movie.posterFullPath = URL.createObjectURL(imageOutput.value.data)
	})
}

function getPosterFullPath(imagesConfig, movie) {
	if (imagesConfig.posterSizes.includes(POSTER_SIZE))
		return imagesConfig.baseUrl + POSTER_SIZE + movie.posterPath
	return imagesConfig.baseUrl + ORIGINAL_SIZE + movie.posterPath
}

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
