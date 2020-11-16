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
		// TO DO
		return this.filterCrewByJob(...jobs).reduce(
			(accumulator, crewMember) => {
				for (let i = 0; i < accumulator.length; i++) {
					const popularMember = accumulator[i]
					if (popularMember.name === crewMember.name) {
						return accumulator
					} else if (
						popularMember.job === crewMember.job &&
						popularMember.popularity < crewMember.popularity
					) {
						accumulator[i] = crewMember
						return accumulator
					} else if (
						popularMember.job === crewMember.job &&
						popularMember.popularity >= crewMember.popularity
					) {
						return accumulator
					}
				}
				return accumulator.concat(crewMember)
			},
			[]
		)
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
