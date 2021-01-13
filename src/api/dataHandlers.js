import MovieList from '../models/MovieList'
import MovieDetails from '../models/MovieDetails'
import Credits from '../models/Credits'
import ImageLists from '../models/ImageLists'
import VideoList from '../models/VideoList'
import GenreList from '../models/GenreList'
import APIConfiguration from '../models/APIConfiguration'

const dataHandlers = {
	prepareMovies: (data) => {
		if (data.status_message === undefined)
			return new MovieList(data).toPOJO()
		return data
	},
	prepareMovieDetails: (data) => {
		if (data.status_message === undefined) return new MovieDetails(data)
		return data
	},
	prepareCredits: (data) => {
		if (data.status_message === undefined) {
			const credits = new Credits(data)
			credits.crew = credits.getDirectorAndScreenplay()
			return credits
		}
		return data
	},
	prepareImages: (data) => {
		if (data.status_message === undefined) return new ImageLists(data)
		return data
	},
	prepareRecommendations: (data) => {
		if (data.status_message === undefined)
			return new MovieList(data).toPOJO()
		return data
	},
	prepareVideos: (data) => {
		if (data.status_message === undefined) {
			const videoList = new VideoList(data)
			videoList.generateVideosPaths()
			return videoList
		}
		return data
	},
	prepareGenres: (data) => {
		if (data.status_message === undefined)
			return new GenreList(data).toPOJO()
		return data
	},
	prepareConfiguration: (data) => {
		if (data.status_message === undefined)
			return new APIConfiguration(data).toPOJO()
		return data
	},
	prepareSearch: (data) => {
		if (data.status_message === undefined)
			return new MovieList(data).toPOJO()
		return data
	}
}

export default dataHandlers
