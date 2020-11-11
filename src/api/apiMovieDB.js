import axios from './axios'
import { API_KEY } from '../config'

export const getMovies = (filter, page = 1) => {
	return axios.get(`/movie/${filter}?api_key=${API_KEY}&page=${page}`)
}

export const getMovieDetails = (id) => {
	return axios.get(`/movie/${id}?api_key=${API_KEY}`)
}
