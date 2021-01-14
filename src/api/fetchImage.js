import axios from 'axios'

const fetchImage = (url) => {
	return axios.get(url, {
		responseType: 'blob'
	})
}

export default fetchImage
