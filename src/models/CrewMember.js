class CrewMember {
	constructor(data) {
		this.creditId = data.credit_id
		this.id = data.id
		this.job = data.job
		this.name = data.name
		this.popularity = data.popularity
	}
}

export default CrewMember
