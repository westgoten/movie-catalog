import Actor from './Actor'
import CrewMember from './CrewMember'

class Credits {
	constructor(data) {
		this.id = data.id
		this.cast = data.cast.map((actorData) => new Actor(actorData))
		this.crew = data.crew.map(
			(crewMemberData) => new CrewMember(crewMemberData)
		)
	}
}

export default Credits
