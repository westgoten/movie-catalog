import Actor from './Actor'
import CrewMember from './CrewMember'
import crewJobs from '../utils/consts/crewJobs'

class Credits {
	constructor(data) {
		this.id = data.id
		this.cast = data.cast.map((actorData) => new Actor(actorData))
		this.crew = data.crew.map(
			(crewMemberData) => new CrewMember(crewMemberData)
		)
	}

	getDirectorAndScreenplay() {
		const director = this.getMostPopularCrewMemberByJob(crewJobs.DIRECTOR)
		const screenplay = this.getMostPopularCrewMemberByJob(
			crewJobs.SCREENPLAY,
			director ? director.name : null
		)
		return [director, screenplay]
	}

	getMostPopularCrewMemberByJob(job, excludedName = null) {
		const filteredCrew = this.filterCrewByJob(job)
		if (filteredCrew.length > 0) {
			return filteredCrew.reduce((accumulator, crewMember) => {
				if (
					crewMember.name !== excludedName &&
					crewMember.popularity > accumulator.popularity
				)
					accumulator = crewMember
				return accumulator
			})
		}
		return undefined
	}

	filterCrewByJob(...jobs) {
		return this.crew.filter((crewMember) =>
			jobs.some(
				(job) => job.toLowerCase() === crewMember.job.toLowerCase()
			)
		)
	}
}

export default Credits
