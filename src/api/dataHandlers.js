import MovieList from '../models/MovieList'
import MovieDetails from '../models/MovieDetails'
import Credits from '../models/Credits'
import ImageLists from '../models/ImageLists'
import VideoList from '../models/VideoList'
import GenreList from '../models/GenreList'
import APIConfiguration from '../models/APIConfiguration'

const dataHandlers = {
	prepareMovies: (data) => {
		if (data.success === undefined || data.success)
			return new MovieList(data)
		return data
	},
	prepareMovieDetails: (data) => {
		if (data.success === undefined || data.success)
			return new MovieDetails(data)
		return data
	},
	prepareCredits: (data) => {
		if (data.success === undefined || data.success) {
			const credits = new Credits(data)
			credits.crew = credits.getDirectorAndScreenplay()
			return credits
		}
		return data
	},
	prepareImages: (data) => {
		if (data.success === undefined || data.success)
			return new ImageLists(data)
		return data
	},
	prepareRecommendations: (data) => {
		if (data.success === undefined || data.success)
			return new MovieList(data)
		return data
	},
	prepareVideos: (data) => {
		if (data.success === undefined || data.success) {
			const videoList = new VideoList(data)
			videoList.generateVideosPaths()
			return videoList
		}
		return data
	},
	prepareGenres: (data) => {
		if (data.success === undefined || data.success)
			return new GenreList(data)
		return data
	},
	prepareConfiguration: (data) => {
		if (data.success === undefined || data.success)
			return new APIConfiguration(data)
		return data
	},
	prepareSearch: (data) => {
		if (data.success === undefined || data.success)
			return new MovieList(data)
		return data
	}
}

export default dataHandlers