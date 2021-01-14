class Movie {
	constructor(data) {
		this.posterPath = data.poster_path
		this.genreIDs = data.genre_ids
		this.id = data.id
		this.title = data.title
		this.voteAverage = data.vote_average
		this.posterFullPath = null
	}

	toPOJO() {
		return {
			posterPath: this.posterPath,
			genreIDs: this.genreIDs,
			id: this.id,
			title: this.title,
			voteAverage: this.voteAverage,
			posterFullPath: this.posterFullPath
		}
	}
}

export default Movie
