import axios from './axios'
import { API_KEY } from '../config'
import dataHandlers from './dataHandlers'

export const getMovies = (filter, page = 1) => {
	return axios.get(`/movie/${filter}?api_key=${API_KEY}&page=${page}`, {
		transformResponse: getDataHandlers(dataHandlers.prepareMovies)
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

function getDataHandlers(...dataHandlers) {
	return axios.defaults.transformResponse.concat(dataHandlers)
}
