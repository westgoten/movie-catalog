import Movie from './Movie'

class MovieList {
	constructor(data) {
		this.page = data.page
		this.totalPages = data.total_pages
		this.results = data.results.map((movieData) => new Movie(movieData))
	}
}

export default MovieList
