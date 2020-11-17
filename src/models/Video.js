import videoSites from '../utils/consts/videoSites'

class Video {
	constructor(data) {
		this.id = data.id
		this.key = data.key
		this.name = data.name
		this.site = data.site
		this.size = data.size
		this.type = data.type
		this.fullVideoPath = null
	}

	generateFullVideoPath() {
		for (const site of Object.keys(videoSites))
			if (videoSites[site].NAME === this.site)
				this.fullVideoPath = videoSites[site].URL + this.key
	}
}

export default Video
