import ImageConfiguration from './ImageConfiguration'

class APIConfiguration {
	constructor(data) {
		this.images = new ImageConfiguration(data.images).toPOJO()
	}

	toPOJO() {
		return {
			images: this.images
		}
	}
}

export default APIConfiguration
