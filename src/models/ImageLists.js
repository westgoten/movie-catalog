import Image from './Image'

class ImageLists {
	constructor(data) {
		this.id = data.id
		this.backdrops = data.backdrops.map(createImage)
		this.posters = data.posters.map(createImage)
	}
}

function createImage(imageData) {
	return new Image(imageData)
}

export default ImageLists
