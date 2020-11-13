import Video from './Video'

class VideoList {
	constructor(data) {
		this.id = data.id
		this.results = data.results.map((videoData) => new Video(videoData))
	}
}

export default VideoList
