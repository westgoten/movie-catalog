import movieFilters from './consts/movieFilters'

export default function getDefaultMovieFilter() {
	return Array.from(movieFilters.keys())[0]
}
