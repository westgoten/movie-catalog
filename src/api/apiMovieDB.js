import axios from './axios'
import { API_KEY } from '../config'

export const getMovies = (filter, page = 1) => {
	return axios.get(`/movie/${filter}?api_key=${API_KEY}&page=${page}`)
}

export const getMovieDetails = (id) => {
	return axios.get(`/movie/${id}?api_key=${API_KEY}`)
}

export const getMovieCredits = (id) => {
	return axios.get(`/movie/${id}/credits?api_key=${API_KEY}`)
}

export const getMovieImages = (id) => {
	return axios.get(`/movie/${id}/images?api_key=${API_KEY}`)
}

export const getMovieRecommendations = (id, page = 1) => {
	return axios.get(
		`/movie/${id}/recommendations?api_key=${API_KEY}&page=${page}`
	)
}

export const getMovieVideos = (id) => {
	return axios.get(`/movie/${id}/videos?api_key=${API_KEY}`)
}

export const getGenres = () => {
	return axios.get(`/genre/movie/list?api_key=${API_KEY}`)
}

export const getConfiguration = () => {
	return axios.get(`/configuration?api_key=${API_KEY}`)
}
