import axios from './axios'
import dataHandlers from './dataHandlers'

const API_KEY = process.env.REACT_APP_API_KEY

export const getMovies = (cancelToken, filter, page = 1) => {
	return axios.get(`/movie/${filter}?api_key=${API_KEY}&page=${page}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareMovies),
		cancelToken
	})
}

export const getMovieDetails = (id) => {
	return axios.get(`/movie/${id}?api_key=${API_KEY}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareMovieDetails)
	})
}

export const getCredits = (id) => {
	return axios.get(`/movie/${id}/credits?api_key=${API_KEY}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareCredits)
	})
}

export const getImages = (id) => {
	return axios.get(
		`/movie/${id}/images?api_key=${API_KEY}&include_image_language=en,null`,
		{
			transformResponse: getDataHandlers(dataHandlers.prepareImages)
		}
	)
}

export const getRecommendations = (id, page = 1) => {
	return axios.get(
		`/movie/${id}/recommendations?api_key=${API_KEY}&page=${page}`,
		{
			transformResponse: getDataHandlers(
				dataHandlers.prepareRecommendations
			)
		}
	)
}

export const getVideos = (id) => {
	return axios.get(`/movie/${id}/videos?api_key=${API_KEY}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareVideos)
	})
}

export const getGenres = () => {
	return axios.get(`/genre/movie/list?api_key=${API_KEY}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareGenres)
	})
}

export const getConfiguration = () => {
	return axios.get(`/configuration?api_key=${API_KEY}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareConfiguration)
	})
}

export const searchMovies = (cancelToken, query, page = 1) => {
	return axios.get(
		`/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
			query
		)}&page=${page}`,
		{
			transformResponse: getDataHandlers(dataHandlers.prepareSearch),
			cancelToken
		}
	)
}

function getDataHandlers(...dataHandlers) {
	return axios.defaults.transformResponse.concat(dataHandlers)
}
