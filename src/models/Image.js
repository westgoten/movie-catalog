class Image {
	constructor(data) {
		this.aspectRatio = data.aspect_ratio
		this.filePath = data.file_path
		this.height = data.height
		this.width = data.width
		this.fullFilePath = null
	}
}

export default Image
