import Genre from './Genre'

class MovieDetails {
	constructor(data) {
		this.backdropPath = data.backdrop_path
		this.budget = data.budget
		this.genres = data.genres.map((genreData) => new Genre(genreData))
		this.id = data.id
		this.overview = data.overview
		this.posterPath = data.poster_path
		this.releaseDate = data.release_date
		this.revenue = data.revenue
		this.runtime = data.runtime
		this.status = data.status
		this.tagline = data.tagline
		this.title = data.title
		this.voteAverage = data.vote_average
	}
}

export default MovieDetails
