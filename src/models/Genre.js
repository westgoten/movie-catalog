class Genre {
	constructor(data) {
		this.id = data.id
		this.name = data.name
	}

	toPOJO() {
		return {
			id: this.id,
			name: this.name
		}
	}
}

export default Genre
