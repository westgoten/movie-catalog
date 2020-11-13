class Actor {
	constructor(data) {
		this.character = data.character
		this.creditId = data.credit_id
		this.id = data.id
		this.name = data.name
		this.order = data.order
		this.profilePath = data.profile_path
		this.fullProfilePath = null
	}
}

export default Actor
