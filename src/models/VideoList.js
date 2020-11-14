import Video from './Video'

class VideoList {
	// TO DO: Implement function to generate the fullVideoPath property of each Video
	constructor(data) {
		this.id = data.id
		this.results = data.results.map((videoData) => new Video(videoData))
	}
}

export default VideoList
