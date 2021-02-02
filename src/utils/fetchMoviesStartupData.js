import { fetchConfiguration } from '../actions/configurationActions'
import { fetchGenres } from '../actions/genresActions'

export default function fetchMoviesStartupData(dispatch) {
	dispatch(fetchConfiguration())
	dispatch(fetchGenres())
}
