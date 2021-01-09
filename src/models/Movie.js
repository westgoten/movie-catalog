class Movie {
	constructor(data) {
		this.posterPath = data.poster_path
		this.genreIDs = data.genre_ids
		this.id = data.id
		this.title = data.title
		this.voteAverage = data.vote_average
		this.fullPosterPath = null
		this.genres = []
	}

	toPOJO() {
		return {
			posterPath: this.posterPath,
			genreIDs: this.genreIDs,
			id: this.id,
			title: this.title,
			voteAverage: this.voteAverage,
			fullPosterPath: this.fullPosterPath,
			genres: this.genres
		}
	}
}

export default Movie
