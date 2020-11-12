class Movie {
	constructor(data) {
		this.posterPath = data.poster_path
		this.genreIDs = data.genre_ids
		this.id = data.id
		this.title = data.title
		this.voteAverage = data.vote_average
		this.fullPosterPath = null
		this.genres = null
	}
}

export default Movie
