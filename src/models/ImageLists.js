import Backdrop from './Backdrop'
import Poster from './Poster'

class ImageLists {
	constructor(data) {
		this.id = data.id
		this.backdrops = data.backdrops.map(
			(backdropData) => new Backdrop(backdropData)
		)
		this.posters = data.posters.map((posterData) => new Poster(posterData))
	}
}

export default ImageLists
