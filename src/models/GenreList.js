import Genre from './Genre'

class GenreList {
	constructor(data) {
		this.genres = data.genres.map((genreData) => new Genre(genreData))
	}
}

export default GenreList
