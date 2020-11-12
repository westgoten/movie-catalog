class Credits {
	constructor(data) {
		this.id = data.id
		this.cast = data.cast // TO DO: Create Actor model
		this.crew = data.crew // TO DO: Create CrewMember model and replace this field for this.director and
		// this.screenplay
	}
}

export default Credits
