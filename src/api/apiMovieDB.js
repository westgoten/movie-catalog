import axios from './axios'
import { API_KEY } from '../config'
import dataHandlers from './dataHandlers'

export const getMovies = (filter, page = 1) => {
	return axios.get(`/movie/${filter}?api_key=${API_KEY}&page=${page}`, {
		transformResponse: getTransformResponse(dataHandlers.prepareMovies)
	})
}

export const getMovieDetails = (id) => {
	return axios.get(`/movie/${id}?api_key=${API_KEY}`, {
		transformResponse: getTransformResponse(
			dataHandlers.prepareMovieDetails
		)
	})
}

export const getCredits = (id) => {
	return axios.get(`/movie/${id}/credits?api_key=${API_KEY}`, {
		transformResponse: getTransformResponse(dataHandlers.prepareCredits)
	})
}

export const getImages = (id) => {
	return axios.get(
		`/movie/${id}/images?api_key=${API_KEY}&include_image_language=en,null`,
		{
			transformResponse: getTransformResponse(dataHandlers.prepareImages)
		}
	)
}

export const getRecommendations = (id, page = 1) => {
	return axios.get(
		`/movie/${id}/recommendations?api_key=${API_KEY}&page=${page}`,
		{
			transformResponse: getTransformResponse(
				dataHandlers.prepareRecommendations
			)
		}
	)
}

export const getVideos = (id) => {
	return axios.get(`/movie/${id}/videos?api_key=${API_KEY}`, {
		transformResponse: getTransformResponse(dataHandlers.prepareVideos)
	})
}

export const getGenres = () => {
	return axios.get(`/genre/movie/list?api_key=${API_KEY}`, {
		transformResponse: getTransformResponse(dataHandlers.prepareGenres)
	})
}

export const getConfiguration = () => {
	return axios.get(`/configuration?api_key=${API_KEY}`, {
		transformResponse: getTransformResponse(
			dataHandlers.prepareConfiguration
		)
	})
}

function getTransformResponse(dataHandler) {
	return axios.defaults.transformResponse.concat(dataHandler)
}
