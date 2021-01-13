class ImageConfiguration {
	constructor(data) {
		this.baseUrl = data.secure_base_url
		this.backdropSizes = data.backdrop_sizes
		this.posterSizes = data.poster_sizes
		this.profileSizes = data.profile_sizes
	}

	toPOJO() {
		return {
			baseUrl: this.baseUrl,
			backdropSizes: this.backdropSizes,
			posterSizes: this.posterSizes,
			profileSizes: this.profileSizes
		}
	}
}

export default ImageConfiguration
