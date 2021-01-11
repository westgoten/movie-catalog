import Genre from './Genre'

class GenreList {
	constructor(data) {
		this.genres = data.genres.map((genreData) =>
			new Genre(genreData).toPOJO()
		)
	}

	toPOJO() {
		return {
			genres: this.genres
		}
	}
}

export default GenreList
