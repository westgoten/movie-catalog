import ImageConfiguration from './ImageConfiguration'

class APIConfiguration {
	constructor(data) {
		this.images = new ImageConfiguration(data.images)
	}
}

export default APIConfiguration
