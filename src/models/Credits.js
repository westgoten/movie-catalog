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

	getMostPopularPersonByJob(...jobs) {
		return this.filterCrewByJob(jobs).reduce(
			(accumulator, currentElement) => accumulator,
			[]
		) // TO DO
	}

	filterCrewByJob(...jobs) {
		return this.crew.filter((crewMember) =>
			jobs.some(
				(job) => job.toUpperCase() === crewMember.job.toUpperCase()
			)
		)
	}
}

export default Credits
